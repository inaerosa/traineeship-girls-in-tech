const data = require('./data.json')
var obj = new Object()
var newObj = new Object();

data.forEach(pedido => {
    obj = pedido;
})

organize(/item.+/)
organize(/merchant.+/);
organize(/cart.+/);
organize(/payments.+/);
organize(/customer.+/);

function organize(type){
    let regexField = new RegExp(type)
    let regexName = /[^a-z0-9-]/g

    let name = type.toString();
    name = name.replace(regexName, '')
 
    newObj[name] = {}

    for (let i = 0; i < Object.keys(obj).length; i++){
        if (regexField.test(Object.keys(obj)[i])){
            let key = (Object.keys(obj)[i]).replace(`${name}_`,"");
            let value = Object.values(obj)[i]
            if(key.includes("address")){
                if(!newObj[name]["address"]){
                    newObj[name]["address"] = {}
                }
                let keyAddressFormated = key.replace("address_",'')
                newObj[name]["address"][keyAddressFormated] = value;
            } else{
                newObj[name][key] = value
            }
            if(key.includes("totalPrice")){
               totalPrice(newObj)
            }
            if(key.includes("subtotal")){
                subTotal(newObj)
            }
            if(key.toString() === "total"){
                total(newObj)
            }
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