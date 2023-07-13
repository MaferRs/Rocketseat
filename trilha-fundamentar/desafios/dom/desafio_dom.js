const openModalbutton = document.getElementById('openModal')

const modalWrapper = document.querySelector('.invisibleModal')

openModalbutton.onclick = function () {
    modalWrapper
        .classList
        .remove('invisibleModal')
}


document.addEventListener('keydown', function (event) {
    const isEscKey = event.key == 'Escape'

    if (isEscKey)
})