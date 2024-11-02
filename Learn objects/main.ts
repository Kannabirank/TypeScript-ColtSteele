let mat = { name: 'Mat', price: 100 }
let pillow = { name: 'Pillow', price: 75 }
let homeProducts = [mat, pillow]
homeProducts.forEach((prod) => console.log(`${prod.name}: ${prod.price}`))

//use type to give name to shape
enum Feature {
  Waterproof,
  Insulated,
}
type demoProduct = {
  name: string
  price?: number
  hasFeature?(Feature): boolean
}

//union types
type subject = {
  id: string
  name: string
}

type student = {
  id: string
  name: string
  className: string
}

let math = { id: '8M4', name: 'algebra' }
let science = { id: '8S4', name: 'big bang theory' }
let sara = { id: 'sara111', name: 'Olivia', className: 'Y8S4' }
let rosana = { id: 'rosana111', name: 'Rosana', className: 'Y8S5' }

let dataItems: (subject | student)[] = [math, sara]
dataItems.forEach((item) => console.log(`ID:${item.id}, Name:${item.name}`))
