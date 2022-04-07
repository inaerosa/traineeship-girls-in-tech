const data = require('./data.json')
var obj = new Object()
var newObj = new Object();
var array   = []

const JSONWrite = (filePath, data, encoding = 'utf-8') => {
    const promiseCallback = (resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), encoding, (err) => {
            if (err) return reject(err)
            resolve(true)
        })
    }
    return new Promise(promiseCallback)
}

data.forEach(pedido => {
    obj = pedido
    organize(/item.+/)
    organize(/merchant.+/);
    organize(/cart.+/);
    organize(/payments.+/);
    if(newObj.payments.payment[1].method == "CASH"){
        newObj.payments.payment[1].changeFor = newObj.payments.payment[1].value + 0.11;
    }else {
        newObj.payments.payment[1].changeFor = 0
    }
    change();
    organize(/customer.+/);
    array.push(JSON.parse(JSON.stringify(newObj)))    
})

JSONWrite('./output.json', array).then(console.log).catch(console.error)

function organize(type){
    let regexField = new RegExp(type)
    let regexName = /[^a-z0-9-]/g

    let name = type.toString();
    name = name.replace(regexName, '')
    newObj[Object.keys(obj)[0]] = Object.values(obj)[0]
    newObj[name] = {}
    
    for (let i = 0; i < Object.keys(obj).length; i++){
        if (regexField.test(Object.keys(obj)[i])){
            let key = (Object.keys(obj)[i]).replace(`${name}_`,"");
            let value = Object.values(obj)[i]
             if(key.includes("address")){
                if(!newObj[name]["address"]) newObj[name]["address"] = {}
                let keyAddressFormated = key.replace("address_",'')
                newObj[name]["address"][keyAddressFormated] = value;
            } else if (key.includes("charges")){
                if(!newObj[name]["charges"]) newObj[name]["charges"] = {}
                let keyChargesFormated = key.replace("charges_",'')
                newObj[name]["charges"][keyChargesFormated] = value;
                if (keyChargesFormated.includes("totalDiscounts")) total_discounts(newObj)
            } else if(key.includes("payment")){
                if(!newObj[name]["payment"]) newObj[name]["payment"] = [{}, {}]
                if(key.includes("1")){
                    let keyPaymentsFormated = key.replace("payment[1]_", '')
                    newObj[name]["payment"][0][keyPaymentsFormated] = value
                } else if(key.includes("2")){
                    let keyPaymentsFormated = key.replace("payment[2]_", '')
                    newObj[name]["payment"][1][keyPaymentsFormated] = value
                }
            } else newObj[name][key] = value
            if (key.includes("totalPrice")) totalPrice(newObj)
            if (key.includes("subtotal") || key.includes("subTotal")) subTotal(newObj) 
            if (key.includes("total")) total(newObj)
            if (key.includes("totalDiscounts")) total_discounts(newObj)
            if (key.includes("value")) value_(newObj) 
            if (key.includes("totalInCash")) totalInCash(newObj)
            if (key.includes("change")) change()
            if (key.includes("method")) changeFor(newObj)
        }         
    } 
}

function details_price(){
    const objItem = newObj.item

    let discount = objItem.discount
    let totalPrice = objItem.totalPrice
    let quantity = objItem.quantity
    let itens = [discount, totalPrice, quantity]

    return itens
}

function totalPrice(obj){
    let field_item = obj.item
    const totalPrice = field_item.quantity * field_item.unitPrice
    field_item.totalPrice = totalPrice
}   

function subTotal(obj){
    let field = obj.cart
    field.subtotal = totalPrice(obj)
    let pay = obj.payments
    if (pay != undefined) pay.charges.subTotal = totalPrice(obj)
}

function total(obj){
    const item = details_price();
    const field = obj.cart

    if(field != undefined){
        const finalTotal = item[1] - item[0]
         field.total = finalTotal;    
    }
    let pay = obj.payments
    if (pay != undefined){
        const finalTotal = item[1] - item[0]
        pay.charges.total = finalTotal
    }
}

function total_discounts(obj){
   const item = details_price()
   obj.payments.charges.totalDiscounts = item[0]
}

function value_(obj){
    const fields = obj.cart;
    let value = Number((fields.total*0.33).toFixed(2));
    newObj.payments.payment[0].value = value
    newObj.payments.payment[1].value = Number((fields.total - value).toFixed(2));
}


function changeFor(obj){
    let obj_1 = obj.payments.payment[0];
    if (obj_1.method == "CASH") obj_1.changeFor = newObj.payments.payment[0].value + 0.07;
    else obj_1.changeFor = 0;
}

function totalInCash(obj){
    let payments = obj.payments.payment
    let tot = payments[0]. value + payments[1].value;
    newObj.payments.charges.totalInCash = tot;
}

function change(){
    let tot = newObj.payments.payment[0].changeFor + newObj.payments.payment[1].changeFor
    if (newObj.payments.charges != undefined) newObj.payments.charges.change = tot;
}