class FormaDeBolo { 
    // Declarando (criando) a classe
    
    constructor(saborDaMassa, saborRecheio) { 
        // Declarando o método (função) construtor, onde armazenamos as variáveis usadas nessa classe
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
        // this.nomeVariavel = nomeVariavel é para declarar as variáveis descritas no método constructor.
        // É o equivalente a "let nomeVariavel = nomeVariavel", só que dentro da classe.
    }
    
    pronto() {
        console.log(`Temos um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio} pronto.`)
    }
    
    assando() {
        console.log(`Estamos assando um bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}.`)
    }
    
    // Declarando (criando) os métodos (funções) que poderão ser acionados por objetos criados a partir dessa classe.
}

let boloFesta = new FormaDeBolo("chocolate", "nutella")
let boloPremium = new FormaDeBolo("baunilha", "coco")
// Instanciando (criando) dois objetos (boloFesta e boloPremium) a partir da classe FormaDeBolo.
// Cada objeto tem suas propriedades específicas (massa e recheio).
// OBS: Sempre que for criar um objeto, use a estrutura "let nomeObjeto = new NomeClasse(parametro1, parametro2...)".

console.log(boloFesta.saborDaMassa)
// Usando nomeObjeto.propriedade você consegue acessar um dado específico armazenado na classe do objeto.
// OUTPUT: chocolate

boloFesta.pronto()
// Aciona o método "pronto" da classe usada para criar "boloFesta", utilizando os parâmetros fornecidos ao instanciar o objeto.
// OUTPUT: Temos um delicioso bolo de chocolate com recheio de nutella pronto.

boloPremium.assando()
// Aciona o método "assando" da classe usada para criar "boloPremium", utilizando os parâmetros fornecidos ao instanciar o objeto.
// OUTPUT: Estamos assando um bolo de baunilha com recheio de coco.
