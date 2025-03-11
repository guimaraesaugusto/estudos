telefone = input("Insira seu telefone: ")
permitidos = "0123456789-() "

if all(caractere in permitidos for caractere in telefone):
    print("Obrigado por cadastrar seu número!")
else:
    print("Número inválido! Use apenas números, hífens, parênteses e espaços.")