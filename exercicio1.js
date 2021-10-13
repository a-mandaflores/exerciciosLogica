var UpperCase = palavra => {
    return palavra.toUpperCase()
                    .split('')
                    .join(' ')

}


console.log(UpperCase('Banana'))