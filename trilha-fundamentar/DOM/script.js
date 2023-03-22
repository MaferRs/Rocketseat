// getElementById() element

// const element = document.getElementById('blog-title')
// console.log(element)

// getElementsByClassName() - html collection

// const element = document.getElementsByClassName('one')
// console.log(element)


//getElementsByTagName() - html collection

//const element = document.getElementsByTagName('meta')
//console.log(element)

//querySelector() - element

// const element = document.querySelector('.one')
// console.log(element)

//querySelectorAll() - nodeList
// const elements = document.querySelectorAll('.one')
// console.log(elements)

// elements.forEach(el => console.log(el))

// MANIPULANDO CONTEUDO

//textContent

// const element = document.querySelector('h1')
// element.textContent += ' Olá devs'
// console.log()

//innerText

// const element = document.querySelector('h1')
// element.innerText = "Olá devs"


//innerHTML

// const element = document.querySelector('h1')
// element.innerHTML = "Olá devs! <small> !!! </small>"

//VALUE

// const element = document.querySelector('input')

// //element.value = 'valor que eu quiser'
// console.log(element.value)
// element.value = 'valor que eu quiser'

//ATRIBUTOS

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')
// header.removeAttribute('class')

// header.setAttribute('class', 'bg header')

// STYLE
// const element = document.querySelector('body')
// element.style.backgroundColor = '#f9f3d2'

// console.log(element.style.backgroundColor)

// CLASSLIST
// const element = document.querySelector('body')

// element.classList.add('active', 'green')
// console.log(element.classList)
// element.classList.remove('active')
// element.classList.toggle('active') // liga e desliga, adiciona e remove


//parentNode parentElement

// const body = document.querySelector('h1')
// //console.log(body.parentNode)
// console.log(body.parentElement)

//childNodes  children

// const el = document.querySelector('body')
// console.log(el.childNodes)
// console.log(el.children)
//firstChild firstElementChild
// console.log(el.firstChild)
// console.log(el.firstElementChild)

//lastChild lastElementChild

// console.log(el.lastChild)
// console.log(el.lastElementChild)

//navegando pelo elementos
// nextSibling nextElementSibling

//navegando pelos elementos
//nextSibling  nextElementSibling
// previousSibling previousElementSibling

// const el = document.querySelector('header')

// console.log(el.nextSibling)
// console.log(el.nextElementSibling)

// console.log(el.previousSibling)
// console.log(el.previousElementSibling)


// criando e adicionando elementos

// const div = document.createElement('div')
// div.innerText = "olá devs"

// const body = document.querySelector('body')

// body.append(div)// adicionar algo depois
// body.prepend(div)// adicionar algo antes


// const div = document.createElement('div')
// div.innerText = "fala mana"

// // insertBefore
// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)

// body.insertBefore(div, header.nextSibling) // simula um insert after


// EVENTOS

// on - evento de click

// function print() {
//     console.log('clicou')
// }

// // eventos de teclado

// const input = document.querySelector('input')

// // input.onkeydown = function () {
// //     console.log('rodei')
// // }

// // input.onkeyup = function () {
// //     console.log('rodei')
// // }

// input.onkeypress = function () {
//     console.log('rodei')
// }



// const h1 = document.querySelector('h1');

// //h1.addEventListener('mouseover', print)

// h1.onclick = print

// function print() {
//     console.log('print')
// }

const input = document.querySelector('input');

input.onkeydown = function (event) {
    //console.log(event.key)
    console.log(event.currentTarget.value)

}