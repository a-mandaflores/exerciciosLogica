
var horasTrabalhadas = 200

var calcHoras = (horasFinais) => {
    const salario = 1000
    const salarioSemanal = salario / 4
    const horasSemanais = 40
    const extra = 0.5

    var hrSemanal = horasFinais / 4
    var calcHorasExtras =  hrSemanal - horasSemanais

    if(calcHorasExtras == 0){
        let salarioFinal = salario
        return salarioFinal
    }else{
        let salarioHora = salarioSemanal / horasSemanais
        let valorExtra = (salarioHora * calcHorasExtras) * extra
        let salarioFinal = (valorExtra + salarioSemanal) * 4
        return salarioFinal
        
    }
    
}



console.log(calcHoras(horasTrabalhadas))