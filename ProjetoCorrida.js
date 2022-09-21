let carros = []

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    
    
    CalcularTempo(distanciaParametro){
        let resultado = distanciaParametro / (this.VelocidadeMaxima/this.Aceleracao)
        return resultado.toFixed(3)
    }
       
}

class Corrida {
    NomePercurso
    Tipo
    Distancia
    Vencedor

    DefinirTempoVencedor(){
    let menorTempoAtual = carros[0].CalcularTempo(this.Distancia)
    let vencedor
    carros.forEach(element => {
        let tempo = element.CalcularTempo(this.Distancia)
        if(tempo < menorTempoAtual){
            menorTempoAtual = tempo
            vencedor = element.Nome
        }
    })
        // this.Vencedor = vencedor
        return vencedor
}   
    
}

let carroUm = new Carro()
carroUm.Nome = "Ferrai"
carroUm.Potencia = 1000
carroUm.VelocidadeMaxima = 350
carroUm.Aceleracao = 2.5

carros.push(carroUm)

let carroDois = new Carro()
carroDois.Nome = "Mercedes"
carroDois.Potencia = 850
carroDois.VelocidadeMaxima = 325
carroDois.Aceleracao = 2.1

carros.push(carroDois)

let carroTres = new Carro()
carroTres.Nome = "McLaren"
carroTres.Potencia = 900
carroTres.VelocidadeMaxima = 340
carroTres.Aceleracao = 1.9

carros.push(carroTres)

let corrida = new Corrida()
corrida.NomePercurso = "Interlagos"
corrida.Tipo = "Fórmula 1"
corrida.Distancia = 30000
corrida.Vencedor = console.log(corrida.DefinirTempoVencedor())