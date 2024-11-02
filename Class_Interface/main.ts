type Person = {
  id: string
  name: string
  city: string
}

type Employee = {
  id: string
  name: string
  dept: string
  city: string
  writeDept: () => void
}

let Employee = function (id: string, name: string, dept: string, city: string) {
  this.id = id
  this.name = name
  this.dept = dept
  this.city = city
}

Employee.prototype.writeDept = function () {
  console.log(`${this.name} works in ${this.dept}`)
}

let salesEmployee = new Employee(
  'kkarmega',
  'Kannan Karmegam',
  'Marketing',
  'Darwin'
)

let data: (Person | Employee)[] = [
  { id: 'bsmith', name: 'Bob Smith', city: 'London' },
  { id: 'ajones', name: 'Andrew Jones', city: 'Brisbane' },
  { id: 'sjules', name: 'Samantha Jules', city: 'Sydney' },
  { id: 'gsmith', name: 'Glenn Smith', city: 'xxx' },
  salesEmployee,
]
data.forEach((item) => {
  if ('dept' in item) {
    item.writeDept()
  } else {
    console.log(`${item.id} ${item.name}, ${item.city}`)
  }
})

//USING CLASSES
class BestEmployee {
  public readonly id: string
  private name: string
  public dept: string
  public city: string

  constructor(id: string, name: string, dept: string, city: string) {
    this.id = id
    this.name = name
    this.dept = dept
    this.city = city
  }

  writeDept() {
    console.log(` print from a class ---> $(this.name) works in $(this.dept)`)
  }
}

let BestEmployee2024 = new Employee(
  'E100',
  'Kannan',
  'Karmegam',
  'Digital Solutions'
)
console.log(BestEmployee2024)

//CLASS INHERITANCE
class Animal {
  public name: string
  public tag: string
  public weight: Int16Array
  constructor(name: string, tag: string, weight: Int16Array) {
    this.name = name
    this.tag = tag
    this.weight = weight
  }

  getGeographicLocation() {
    return 'australia'
  }
}

class dog extends Animal {
  constructor(name: string, tag: string, weight: Int16Array) {
    super(name, tag, weight)
  }
  getGeographicLocation() {
    return 'xx'
  }
}

//abstract class
abstract class Superhero {
  constructor(public id: string, public name: string) {}
  getProfile(id: string) {
    console.log(`super hero id is ${id}`)
  }
  abstract getUniqueSkill()
}

class Spiderman extends Superhero {
  constructor(public id: string, public name: string) {
    super(id, name)
  }
  getUniqueSkill() {
    console.log(`${this.name} unique talent is spider web`)
  }
}

class drStrange extends Superhero {
  constructor(public id: string, public name: string) {
    super(id, name)
  }
  getUniqueSkill() {
    console.log(`${this.name} unique talent is laser guns`)
  }
}

let superheroData: Superhero[] = [
  new Spiderman('spider', 'Spiderman'),
  new drStrange('drs', 'Dr Strange'),
]

superheroData.forEach((item) => console.log(item.getUniqueSkill()))
//--------end abstract class lesson

//INTERFACES
interface Planet {
  name: string
  size: bigint
  distanceFromSun: bigint
  getDetails(): string
}
class Earth implements Planet {
  constructor(
    public name: string,
    public size: bigint,
    public distanceFromSun: bigint
  ) {
    //no statement required
  }
  getDetails() {
    return `${this.name} is ${this.distanceFromSun} Million Kilometers away from sun`
  }
}

class Mars implements Planet {
  constructor(
    public name: string,
    public size: bigint,
    public distanceFromSun: bigint
  ) {}
  getDetails() {
    return `${this.name} is ${this.distanceFromSun} Million Kilometers away from sun`
  }
}
let x = new Earth('Earth', BigInt(143242340), BigInt(1234234230))
console.log(x.getDetails())

//Generic Types - abstraction

function getFirstElement(array: (number | string)[]) {
  return array[0]
}
const numbers = [1, 2, 3]
const strings = ['asda', 'asdsad', 'asdasd']

console.log('--start generics--')
console.log(getFirstElement(numbers))
console.log(getFirstElement(strings))

//improved version
function getFirstElement1<TElement>(array: TElement[]) {
  return array[0]
}
const numbers1 = [100, 200, 300]
const strings1 = ['First', 'Second', 'Third']

console.log(getFirstElement1(numbers1))
console.log(getFirstElement1(strings1))

type APIResponse<Data> = {
  data: Data
  isError: boolean
}

type userResponse = APIResponse<{ name: string; age: number }>

const response: userResponse = {
  data: { name: 'kannan', age: 30 },
  isError: true,
}

console.log(response)
//--------------------------------------------------------------------------
function removeOrders<T>(arr: Array<T>): Array<T> {
  arr.shift()
  return arr
}
console.log('another generics example')
console.log(removeOrders([100, 101, 102]))
console.log(removeOrders(['burger', 'soda', 'chips']))

//use of generics in Interface
class Shirt<T> {
  size: T
  price: number

  constructor(size: T, price: number) {
    this.size = size
    this.price = price
  }
}
const gazman = new Shirt(34, 75)
const roddgunn = new Shirt('M', 75)
//-----------------------------------------------------------------------------
