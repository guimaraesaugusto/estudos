def conta_vogais(texto):
    # Defina um conjunto de vogais tanto minúsculas quanto maiúsculas:
    VOGAIS = "aeiou"

    # Inicialize um contador para contar as vogais:
    contador = 0
    
   
    for char in texto: # percorre letra a letra de texto e armazena em char
       if char.lower() in VOGAIS: #verifica se a variável char está contida em VOGAIS
           contador += 1
        
    
    return contador

# Solicitamos ao usuário que insira uma string
texto = input("Insira uma palavra pra validar a quantidade de vogoais presente nela: ")

# Chamamos a função conta_vogais e exibimos o resultado
resultado = conta_vogais(texto)
print(f"O número de vogais na string '{texto}' é: {resultado}")