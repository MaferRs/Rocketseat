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

// Manipulando conteúdo

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

//value

// const element = document.querySelector('input')

// //element.value = 'valor que eu quiser'
// console.log(element.value)
// element.value = 'valor que eu quiser'

//atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')
// header.removeAttribute('class')

// header.setAttribute('class', 'bg header')

// style
// const element = document.querySelector('body')
// element.style.backgroundColor = '#f9f3d2'

// console.log(element.style.backgroundColor)

// classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') // liga e desliga, adiciona e remove



