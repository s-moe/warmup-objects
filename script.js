const person = {firstName: "Mick", lastName: "Jagger"}

console.log(person.firstName)
console.log(person["firstName"])

//all keys are converted to strings
const years = {1999: 'Good', 2020: 'Not good'}
console.log(years[1999])
console.log(typeof years[1999])