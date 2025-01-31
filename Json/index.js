// Declarando e criando o Json
let invoice = {
	id: 12345,
	name: "Augusto",
    age: 24,
    products: { //json dentro de json
    0: ["notebook", 2599.90],
    1: ["teclado", 129.90],
    2: ["Monitor", 899.90]
    },
    jobTittle: "Analista"
}

// criando função para processar o Json
function processingInvoice(Jsoninvoice){
	console.log(`O comprador é ${Jsoninvoice.name} e sua idade é ${Jsoninvoice.age}`)
	console.log(`-----------------------`)
	console.log(`Produtos solicitados:`)

	for(index = 0; index < Object.keys(Jsoninvoice.products).length; index ++){
	let i = 0
	let j = 0
    // Jsoninvoice.products[index][0] = busca o 1 item do json no caso é o item
	// Jsoninvoice.products[index][1] = busca o 2 item do json no caso é o preço
    console.log(`- ${Jsoninvoice.products[index][0]}: R$ ${Jsoninvoice.products[index][1]}`)
    }

   /* //existe um for especifico para percorrer json, no caso abaixo iremos percorrer o json products que está dentro do json invoive

    for(let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index] //declara a variavel em forma de array e coloca os valores do array dentro de invoice.products conforme o index dos itens
        console.log(`- ${productName}: R$ ${productPrice}`)
    } 
    */

    console.log("teste augusto")

}

//chamando a função com base no Json
processingInvoice(invoice)

