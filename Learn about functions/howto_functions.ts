// learned from essential typescript A-press book
function calculateTax(amount) {
  return amount * 1.2
}

let taxValue = calculateTax(150)
console.log(`Total Amount: ${taxValue}`)

//with optional parameters
function calculateTax2(amount, discount?): number {
  return amount * 1.2 - (discount || 0)
}

let taxValue2 = calculateTax2(150, 10)
console.log(`Total Amount 2: ${taxValue2}`)

//with default parameters value
function calculateTax3(amount, discount = 0): number {
  return amount * 1.2 - discount
}

let taxValue3 = calculateTax3(160, 10)
console.log(`Total Amount 3: ${taxValue3}`)

//Rest parameters.. it should be the last parameter
function calculateTax4(
  amount: number,
  discount: number = 0,
  ...extraFees: number[]
): Number {
  return (
    amount * 1.2 - discount + extraFees.reduce((total, val) => total + val, 0)
  )
}
let taxValue4 = calculateTax4(150, 10, 20, 10, 10, 10, 10)
console.log(`Total Amount 4: ${taxValue4}`)

//tsconfig null implicit checks
//let taxValue5 = calculateTax4(null, 0)
//console.log(`Total Amount (null parameter): ${taxValue5}`)
