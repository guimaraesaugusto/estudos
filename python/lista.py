numeros = [1, 30, 21, 2, 9, 65, 34] #lista
pares = [] #lista vazia

for numero in numeros: #percorrer a lista
    if numero % 2 == 0:
        pares.append(numero)

print(pares)

## outra forma de fazer
numeros = [1, 30, 21, 2, 9, 65, 34] #lista
pares = [numero for numero in numeros if numero % 2 == 0] 

print(pares)

## modificando valores
numeros = [1, 30, 21, 2, 9, 65, 34] #lista
quadrado = [] #lista vazia

for numero in numeros:
    quadrado.append(numero ** 2)
print(quadrado)
