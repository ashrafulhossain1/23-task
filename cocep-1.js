const fruits = [20, 30, 40]
const fruit2 = [50, 60, 70]

const addArray = fruit2 + fruits; // it will not work. when it will custom add. they will be a string. like just --> 20,30,4020,30,40
// console.log(Array.isArray(addArray))
// console.log(Array.isArray(fruit2))

// right way is 
// var addArrayMain = fruits.concat(fruit2);
// console.log(addArrayMain)
// output [ 20, 30, 40, 20, 30, 40 ]
// addArrayMain[3] = 5000;
// console.log(addArrayMain[3])
// console.log(addArrayMain);
// console.log(fruits.indexOf(55000))
// console.log(fruits.includes(10000))

const names = ['jamal', 'kamal', 'salam', 'simran'];
const nameString = names.join()
// console.log(nameString)
// console.log(typeof nameJoin)
// output ---> jamal,kamal,salam,simran

const stringName = "jamal,kamal,salam,simran";
const arrayName = stringName.split(',')
console.log(arrayName)
// output ---> [ 'jamal', 'kamal', 'salam', 'simran' ]
