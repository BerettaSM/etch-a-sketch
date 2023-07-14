const container = document.querySelector('.container')

container.addEventListener('mouseover', e => {
    if(e.target === e.currentTarget) return

    const square = e.target
    square.classList.add('painted')
})

createDivs()

function createDivs() {
    const quantity = 16 * 16

    for (let i = 0; i < quantity; i++) {
        const div = document.createElement('div')
        div.className = 'square'
        container.appendChild(div)
    }
}