class heroi{
    constructor(nome,idade,tipoHeroi){
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi.toLowerCase()
        this.tipoAtaque = this.definirAtaque(); // declarando uma várival que aciona a função tipoAtaque
    }

    definirAtaque(){
        switch(this.tipoHeroi){
            case "mago":
                return "magia"
            case "guerreiro":
                return "espada"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "shuriken"
            default:
                return "nenhum atributo, baixo dano gerado"
        }
    }

    atacar(){
        console.log(`O herói ${this.nome} do tipo ${this.tipoHeroi} atacou usando ${this.tipoAtaque}`)
    }
}

let heroiThor = new heroi("Thor", 42, "Viking")
heroiThor.atacar()

let heroiJack = new heroi("Jack", 55, "ninja")
heroiJack.atacar()

// o objeto instanciado pode ser acionado com o método da classe a qualquer momento no código, não necessáriamente logo em seguida
let heroiMestreDosMagos = new heroi("Mestre dos Magos", 80, "MAGO") 
let heroiJhonnyBravo = new heroi ("Jhonny Bravo", 25, "GUERREIRO")
heroiMestreDosMagos.atacar()
heroiJhonnyBravo.atacar()