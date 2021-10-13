const list = [1, 2, 3, 4, 5, 6]

const media = item =>{
   var soma = item.reduce((soma, i) =>{return soma + i})
   return soma / item.length
}

console.log(media(list))