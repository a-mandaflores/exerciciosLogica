const priceApple = 1.30
const promoApple = 1
const quant = 12

const calc = uni => {
    if(quant < 12){
        let price = uni * priceApple
        return price.toFixed(2)
    }else{
        let price = uni * promoApple
        return price.toFixed(2)
    }
}

console.log("O valor a ser pago é R$" + calc(quant))

