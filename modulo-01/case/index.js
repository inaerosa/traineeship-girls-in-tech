const data = require('./data.json')
var obj = new Object()
var newObj = new Object();

data.forEach(pedido => {
    obj = pedido;
})

organize(/item.+/);

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
        }
    }
}

function totalPrice(obj){
    let field_item = obj.item

    const totalPrice = field_item.quantity * field_item.unitPrice
    field_item.totalPrice = totalPrice
    return totalPrice
}  