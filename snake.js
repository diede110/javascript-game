export const SNAKE_SPEED = 2
const snakeBody = [{ x: 11, y: 11}]

export function update() {
    console.log('update snake')
}

export  function draw(gameBoard) {
    console.log('draw snake')
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gricolumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendchild(snakeElement)

    })
}