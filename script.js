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