const list = [ -25, 2, -1, 3, -5, 4, -10]



var numberNegative = (item) => {
    let negative = 0
    for(i = 0; i <= item.length; i++){
        if(item[i] < 0) negative++
    }

    return negative

}

console.log(numberNegative(list))
