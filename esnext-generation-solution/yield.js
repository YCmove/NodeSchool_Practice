'use strict'

function* count() {
    yield 0
    yield 1
    yield 2
}

let generator = count()

// for (let i of generator) {
//     console.log(i)
// }

console.log(generator.next()) // { value: 0, done: false }
console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next()) // { value: 2, done: false }
console.log(generator.next()) // { value: undefined, done: true }
console.log(generator.next()) // { value: undefined, done: true }