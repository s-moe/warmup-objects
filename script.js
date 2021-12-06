const person = {firstName: "Mick", lastName: "Jagger"}

console.log(person.firstName)
console.log(person["firstName"])

//all keys are converted to strings
const years = {1999: 'Good', 2020: 'Not good'}
console.log(years[1999])
console.log(years["2020"])
console.log(typeof years[1999])

let birthYear = 2020

years[birthYear]

console.log(years[birthYear])

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address} in ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

console.log(fullAddress)

//modifying object

const midTerms = {danielle: 96, thomas: 78}
console.log(midTerms)
midTerms.thomas = 79
console.log(midTerms)
midTerms['danielle'] = 'A'
midTerms.ezra = 'B+'
console.log(midTerms)
console.log(midTerms['danielle'][0])

const comments = [
  { username: 'Tammy', 
  text: 'lolol',
  votes: 9

  },
  {
    username: 'Joe',
    text: 'joking',
    votes: 3

  }
]
console.log(comments[1].text)
console.log(comments[0]['text'])

const users = {
  "men": [{name: 'john', age: 36}, {name: 'frank', age: 32}],
  "women": [{name: 'joann', age: 36}, {name: 'francis', age: 32}],
  "non-binary": [{name: 'jo', age: 36}, {name: 'frankie', age: 32}]
}
console.log(users.men[1].name)