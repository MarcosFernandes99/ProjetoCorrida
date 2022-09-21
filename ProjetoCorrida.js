class carro {
    nome = "Ferrari"
    potencia = 1000
    velocidadeMaxima = 350
    aceleracao = 3
    
    
    calcularTempo(distanciaParametro){
        let resultado = distanciaParametro / (this.velocidadeMaxima/this.aceleracao)
        return resultado.toFixed(3)
    }

       
}

let classeCarro = new carro()
let distanciaMetros = 1000
console.log(classeCarro.calcularTempo(distanciaMetros))






