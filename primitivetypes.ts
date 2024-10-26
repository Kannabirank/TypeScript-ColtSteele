//first thing you learn is type annotation
let agentName: string = 'Agent 47'
let agentLearningAbility: number = 100
let isAgentDangerous: boolean = true

//why annotations are not mostly not needed.. because it's bleady smart. it can infer types

//type inference
let agentFavouriteFood = 'Pizza'
//agentFavouriteFood = 10 // this is error

//Super awesome funky "Any" ..avoid it most of the time..
let thing: any = 'What the F*'
thing = 10
thing = true
thing.toUpperCase()

const agentSkillSets = ['Karate', 'Hacking']
let foundSkill
for (let agentSkillSet of agentSkillSets) {
}

//function parameter
function assignAgentTask(personToKill: string) {}

assignAgentTask('Kannan')
//assignAgentTask(100)

//arrow function, function parameter, default values
const doSomething = (
  person: string,
  age: number,
  isDump: boolean,
  isRich: string = 'super rich'
) => {}

//function return type
function greet(): string {
  return 'hello dude'
}

//anonymous functions.. incomplete
const listOfColours = ['red', 'blue', 'orange']

//void
function printTwice(message: string): void {
  console.log(message)
}

//never - confusing
function error(message: string): never {
  throw new Error(message)
}

// Inferred return type is never
function fail() {
  return error('Something failed')
}

//type union
function calculateTax(amount: number, format: boolean): string | number {
  const calcAmount = amount * 1.38
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount
}

//type assertion
let taxNumber = calculateTax(100, false) as number
let taxString = calculateTax(500, true) as number

let taxString1 = <string>calculateTax(100, false)
let taxString2 = calculateTax(100, false) as string

//unknown type
