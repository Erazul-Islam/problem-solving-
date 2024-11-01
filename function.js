// problem 3

const squareFunction = (number) => {
    return number * number
}


const doubleFunction = (number) => {
    return number * 2
}


const addFunction = (number) => {
    return number + 5
}

const newFunction = (number) => {
    const square = squareFunction(number)

    const double = square * 2

    const add = double + 5

    return add
}

console.log(newFunction(5))