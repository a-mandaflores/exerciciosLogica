
const add = []

const addNumber = number => {
    for(let i = 1; i <= number; i++){
        add.push(i)
    } 
  
}

addNumber(5)


var soma = add.reduce((soma, i) => {return soma + i})

console.log(soma)
