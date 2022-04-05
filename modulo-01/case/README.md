# Explicando a estrutura

No arquivo .JSON encaminhado, nenhum campo é estruturado da forma correta, desta forma, sua estrutura foi modificada
As principais chaves do .json são
   * Item
   * Merchant
   * Cart
   * Payments
   * Customer
  
Desta forma, cada atributo virou um objeto que contem suas próprias chaves e valores

```json
    "item": {
        "id": 1,
        "name:" "blbalabal"
    },
    "merchant": {
        "id": 2,
        "name": "blablaba"
    }
```

Vale ressaltar que alguns campos dentro do objeto podem se tornar outros objetos, como exemplo tempos *address* na chave "merchant", logo 
```json
    "merchant":{ 
       "name": "Reynolds -Goldner"
       "address": {
            "country": "South Georgia and the South Sandwich Islands",
            "neighbourhood": "Rhode Island"
        }
    }
```

Por último, mas não menos importante, o atributo Payments, no .json original é tratado através de chaves com índices, desta forma, a melhor forma de estruturá-lo seria utilizando arrays de objetos.

```json
        "payments": {
            "payment": [ 
                { 
                    "method": "DEBIT",
                    "code": 368,
                }, 
                {
                    "method": "CREDIT",
                    "code": 412
                }
            ],
            "charges": {
               "subTotal": 123,
               "totalInCash": 1234
            }
        }
``