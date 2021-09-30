console.log("\nPrivate Object\n");

const username = Symbol("username")
const password = Symbol("password")
const age = Symbol("age")

//Private variables
const user = {
  [username]: "haroldao",
  [password]: "1234567890",
  age: 17
}

console.log(user.username)
console.log(user.password)