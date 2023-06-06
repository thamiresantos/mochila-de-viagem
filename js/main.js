const form = document.getElementById("novoItem");
lista.appendChild(novoItem)

form.addEventListener("submit", (evento) => {
    evento.preventDefault() //interromper o comportamento de enviar as informações de volta para o html

   criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    const lista = document.getElementById("lista")

    
}