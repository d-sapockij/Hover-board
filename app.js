const board = document.querySelector('#board')
const colors = ['#ED4747', '#F48647', '#E8CF4D', '#7AEE70', '#6AF1C8', '#3F63E1', '#CD3FF0', '#EB77A1']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(wrapper)
    wrapper.append(square)

    wrapper.addEventListener('mouseover', () => {
       setColor(square)
    })

    wrapper.addEventListener('mouseleave', () => {
        removeColor(square)
     })
}

function setColor(el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #101010`

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}