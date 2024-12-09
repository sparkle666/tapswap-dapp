// This is known as named export of functions

export const owner = "James"

export function addTwoNumbers(num1, num2){  
    console.log((num1 + num2) ** 12)

    return (num1 + num2) ** 12
}

export function addThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3
}

// This is known as default export of functions
function addFourNumbers(num1, num2, num3){
    // console.log(num1 + num2 + num3)
    return num1 + num2 + num3
}
export default addFourNumbers

let sum = addTwoNumbers(20, 80)

console.log(sum)


// Work for Export and Import

export function force (m , a){
    let force = m * a
    console.log(force)

}

