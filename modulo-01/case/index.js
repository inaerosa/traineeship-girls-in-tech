const data = require('./data.json')
var obj = new Object()
var newObj = new Object();

data.forEach(pedido => {
    obj = pedido;
})

organize(/item.+/);
organize(/cart.+/);

console.log(newObj)

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
            newObj[name][key] = value
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
    return totalPrice
}  

function subTotal(obj){
    let field = obj.cart
    field.subtotal = totalPrice(obj)
}

function total(obj){
    const field = obj.cart
    const item = details_price();
    const finalTotal = item[1] - item[0]
    field.total = finalTotal;
}