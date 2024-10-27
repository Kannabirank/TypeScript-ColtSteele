let hat: [string, number] = ['This is text', 200]
hat.forEach((h: string | number) => {
  if (typeof h === 'string') {
    console.log(`string: ${h}`)
  } else {
    console.log(`int: ${h.toFixed(2)}`)
  }
})

let gloves: [string, number] = ['Gloves', 75]
let products: [string, number][] = [
  ['Hat', 100],
  ['Gloves', 75],
]
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products]
tupleUnion.forEach((elem: [string, number] | boolean) => {
  if (elem instanceof Array) {
    let [str, num] = elem
    console.log(`Name: ${str}`)
    console.log(`Price: ${num.toFixed(2)}`)
  } else if (typeof elem === 'boolean') {
    console.log(`Boolean Value: ${elem}`)
  }
})

//enums
function calculateTax(amount: number): number {
  return amount * 1.2
}
function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`)
}
enum Product {
  Hat,
  Gloves,
  Umbrella,
}
let newProducts: [Product, number][] = [
  [Product.Hat, 200],
  [Product.Gloves, 75],
]
newProducts.forEach((prod: [Product, number]) => {
  switch (prod[0]) {
    case Product.Hat:
      writePrice('Hat', calculateTax(prod[1]))
      break
    case Product.Gloves:
      writePrice('Gloves', calculateTax(prod[1]))
      break

    case Product.Umbrella:
      writePrice('Umbrella', calculateTax(prod[1]))
      break
  }
})

//literal values
let restrictedValue: 1 | 2 | 3 = 3 //nice...only these values are allowed...room potu think pannirukanunga
console.log(`Literal Value: ${restrictedValue}`)

//literal value types in function
function calculatePrice(quantity: 1 | 2, price: number): number {
  return quantity * price
}
let total = calculatePrice(2, 19.99)
console.log(`value type in function -- Price: ${total}`)
