
//2 и 3
console.log('Задание 2 и 3')
let int1 = prompt('введите 1 число')
let int2 = prompt('введите 2 число')

function maxinteger(x,y) {
    let max 
    if(x > y){
        max = x
    } else max = y
    return max
}
console.log(maxinteger(int1, int2))

//4
console.log('Задание 4')
let a = prompt('введите 1 число')
let b = prompt('введите 2 число')

function getrandom(x, y){
    let random = Math.floor(Math.random()*(y - x) + x)
    return random
}

console.log(getrandom(a, b))


//1
console.log('Задание 1')

let input = document.querySelector('input')
input.addEventListener('keyup', function(event) {
    // if(event.code == 'Enter'){
    //     console.log(event.target.value)
    // }
    console.log(event.target.value)
    
})




