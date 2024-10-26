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
let foundSkill;
for (let agentSkillSet of agentSkillSets) {
  
}
