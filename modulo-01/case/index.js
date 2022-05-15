const data = require("./data.json");
const fs = require("fs");
var obj = new Object();
var newObj = new Object();
var array = [];

// muito boa a forma de escrever essa função., poderia utilizar async/await aqui também.
const JSONWrite = (filePath, data, encoding = "utf-8") => {
  const promiseCallback = (resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  };
  return new Promise(promiseCallback);
};

data.forEach((pedido) => {
  obj = pedido;
  organize(/item.+/);
  organize(/merchant.+/);
  organize(/cart.+/);
  organize(/payments.+/);
  if (newObj.payments.payment[1].method == "CASH") {
    newObj.payments.payment[1].changeFor = newObj.payments.payment[1].value + newObj.payments.payment[0] * 0.11;
  } else {
    newObj.payments.payment[1].changeFor = 0;
  }
  change();
  organize(/customer.+/);
  array.push(JSON.parse(JSON.stringify(newObj)));
});

JSONWrite("./output.json", array)
  .then((res) => res)
  .catch(console.error);

function organize(type) {
  let regexField = new RegExp(type);
  let regexName = /[^a-z0-9-]/g;

  let name = type.toString();
  name = name.replace(regexName, "");
  newObj[Object.keys(obj)[0]] = Object.values(obj)[0]; // não entendi o propósito disso;
  newObj[name] = {};

  // muito if, o processamento fica muito mais lento, e não é uma boa prática.
  // sugiro ver o vídeo: https://www.youtube.com/watch?v=Lf3ZV0UsnEo&t=128s
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (regexField.test(Object.keys(obj)[i])) {
      let key = Object.keys(obj)[i].replace(`${name}_`, "");
      let value = Object.values(obj)[i];
      if (key.includes("address")) {
        if (!newObj[name]["address"]) newObj[name]["address"] = {};
        let keyAddressFormated = key.replace("address_", "");
        newObj[name]["address"][keyAddressFormated] = value;
      } else if (key.includes("charges")) {
        if (!newObj[name]["charges"]) newObj[name]["charges"] = {};
        let keyChargesFormated = key.replace("charges_", "");
        newObj[name]["charges"][keyChargesFormated] = value;
        if (keyChargesFormated.includes("totalDiscounts")) total_discounts(newObj);
      } else if (key.includes("payment")) {
        if (!newObj[name]["payment"]) newObj[name]["payment"] = [{}, {}];
        if (key.includes("1")) {
          let keyPaymentsFormated = key.replace("payment[1]_", "");
          newObj[name]["payment"][0][keyPaymentsFormated] = value;
        } else if (key.includes("2")) {
          let keyPaymentsFormated = key.replace("payment[2]_", "");
          newObj[name]["payment"][1][keyPaymentsFormated] = value;
        }
      } else newObj[name][key] = value;
      if (key.includes("totalPrice")) totalPrice(newObj);
      if (key.includes("subtotal") || key.includes("subTotal")) subTotal(newObj);
      if (key.includes("total")) total(newObj);
      if (key.includes("totalDiscounts")) total_discounts(newObj);
      if (key.includes("value")) value_(newObj);
      if (key.includes("totalInCash")) totalInCash(newObj);
      if (key.includes("change")) change();
      if (key.includes("method")) changeFor(newObj);
    }
  }
}

// essa função poderia receber o objeto como parametro, assim ficaria mais "dinamica" no recebimento desse parametro.
function details_price() {
  const objItem = newObj.item;
  // console.log(objItem);
  let discount = objItem.discount;
  let totalPrice = objItem.totalPrice;
  let quantity = objItem.quantity;
  let itens = [discount, totalPrice, quantity];

  return itens;
}

// suas funções poderiam ser menos "engessadas", exemplo com arrowFunction
// de uma pesquisada também sobre funções puras
const totalPriceEx = (quantity, price) => quantity * price;

function totalPrice(obj) {
  let field_item = obj.item;
  const totalPrice = field_item.quantity * field_item.unitPrice;
  field_item.totalPrice = totalPrice;

  return totalPrice;
}

// é uma boa prática validar a não condição antes de fazer "processamentos"
function subTotal(obj) {
  if (obj.payments != undefined) obj.payments.charges.subTotal = totalPrice(obj);
  let field = obj.cart;
  field.subtotal = totalPrice(obj);
}

// aqui é bom criar uma função que tem uma unica responsabilidade
function total(obj) {
  const item = details_price();
  const field = obj.cart;
  // precisamos reduzir a quantidade de ifs, outra coisa, sempre crie verificações mais precissa
  // por exemplo field !== undefined
  if (field != undefined) {
    const finalTotal = item[1] - item[0];
    field.total = finalTotal;
  }
  let pay = obj.payments;
  if (pay != undefined) {
    const finalTotal = item[1] - item[0];
    pay.charges.total = finalTotal;
  }
}

function total_discounts(obj) {
  const item = details_price();
  obj.payments.charges.totalDiscounts = item[0];
}

function value_(obj) {
  const fields = obj.cart;
  let value = Number((fields.total * 0.33).toFixed(2));
  newObj.payments.payment[0].value = value;
  newObj.payments.payment[1].value = Number((fields.total - value).toFixed(2));
}

function changeFor(obj) {
  let obj_1 = obj.payments.payment[0];
  if (obj_1.method == "CASH") obj_1.changeFor = newObj.payments.payment[0].value + newObj.payments.payment[0] * 0.07;
  else obj_1.changeFor = 0;
}

function totalInCash(obj) {
  let payments = obj.payments.payment;
  const pay_1 = payments[0].method;
  const pay_2 = payments[1].method;
  let tot;

  if (pay_1 == "CASH" && pay_2 == "CASH") tot = payments[0].value + payments[1].value;
  else if (pay_1 == "CASH" && pay_2 != "CASH") tot = payments[0].value;
  else if (pay_1 != "CASH" && pay_2 == "CASH") tot = payments[1].value;
  else tot = 0;

  newObj.payments.charges.totalInCash = tot;
}
/* 
  sobre o totalInCash: no seu calculo espera-se que tenha apenas dois tipo de pagamento e além disso, se tiver um unico pagamento, o pay_2 vai quebrar pois payments[1] vai ser igual a undefined e você está tentando acessar o method de um payment undefined;
  tente ser mais dinâmico, testando as possibilidades mais básicas, veja o exemplo a baixo que resolveria isso e não precisaria de vários if
*/
const totalInCashSample = (obj) => {
  const { payment } = obj.payments;
  let totalCash = 0;
  payment.forEach((pay) => {
    if (pay.method === "CASH") {
      totalCash += pay.value;
    }
  });
  return totalCash;
};

function change() {
  let tot = newObj.payments.payment[0].changeFor + newObj.payments.payment[1].changeFor;
  if (newObj.payments.charges != undefined) newObj.payments.charges.change = tot;
}

/**
 * Obs: o Case funciona e entrega o esperado, mas daqui um tempo você tera dificuldade de olhar esse código e entender o que está acontecendo (posso estar errado rsrsrs), mas o fato é que poderia sem menos complexo
 */
