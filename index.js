// let a = ["Andres", "Renato", "Ayxa", "David", "Osmaryz"]
// //push
// a.push("Jorge")
// console.log("A", a)

// //unshift
// let b = ["Andres", "Renato", "Ayxa", "David", "Osmaryz"]
// b.unshift("Franco")
// console.log("B", b)

// // pop
// let c = ["Andres", "Renato", "Ayxa", "David", "Osmaryz"]
// c.pop()
// c.pop()
// console.log("C", c)

// //shift
// let d = ["Andres", "Renato", "Ayxa", "David", "Osmaryz"]
// d.shift()
// console.log("D", d)


// let invitadoInput = document.querySelector("#nuevoInvitado")//input
// let btnAgregar = document.querySelector("#agregarInvitado")//boton
// let listaDeInvitados = document.querySelector("#invitados") //ul

// let invitados = []

// btnAgregar.addEventListener("click", () => {
//     const nombre = invitadoInput.value
//     invitados.push(nombre)
//     invitadoInput.value = ""
//     // console.log(invitados)
//     let html = ""
//     for (let invitado of invitados) {
//         html += `<li>${invitado}</li>`;
//     }
//     listaDeInvitados.innerHTML = html
// })


// const cocteles = [ "Piñacolada", "Margarita", "Mojito", "Caipirinha" ]
// cocteles.splice(1, 2) /* Eliminamos el elemento en el índice 2, o sea
// Mojito */
// console.log(cocteles)

// const cocteles = [ "Piñacolada", "Margarita", "Mojito", "Caipirinha", "Mojito" ]
// const index = cocteles.findIndex((e) => e === "Mojito" )
// // console.log(index)
// cocteles.splice(index, 1)
// console.log(cocteles)








let invitadoInput = document.querySelector("#nuevoInvitado")//input
let btnAgregar = document.querySelector("#agregarInvitado")//boton
let listaDeInvitados = document.querySelector("#invitados") //ul

let invitados = []

function borrar(id){
    const index = invitados.findIndex((e) => e.id === id)
    invitados.splice(index, 1)
    renderInvitados()
}

function renderInvitados(){

    let html = ""
    for (let invitado of invitados) {
        html += `
            <li>${invitado.nombre}
                <button onclick="borrar(${invitado.id})"> x </button>
            </li>
        `;
    }
    listaDeInvitados.innerHTML = html
}

btnAgregar.addEventListener("click", () => {
    const nuevoInvitado = {id:Date.now(), nombre: invitadoInput.value}
    invitados.push(nuevoInvitado)
    invitadoInput.value = ""
    console.log(invitados)
    renderInvitados()
})