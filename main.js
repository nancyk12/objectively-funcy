// Your code here.
/*## Tasks

* `getFirstName` - returns the value of the firstName property of the given person object
  * `getFirstName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin'`
  * `getFirstName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`
  */




function getFirstName(person){
  return person.firstName;
}
const person = {firstName: 'Colin', lastName: 'Jaffe'}
console.log(getFirstName(person));

/* 2* `getLastName` - returns the value of the lastName property of the given person object
  * `getLastName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Jaffe'`
  * `getLastName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`*/

  function getLastName(person){
    return person.lastName;
  }
  
  console.log(getLastName(person));

  /** 3 `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object
  * `getFullName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin Jaffe'`
  * `getFullName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra Solano'`
  */
   function getFullName(person){
    return person.firstName + " " + person.lastName;
   }
  console.log(getFullName(person));

/* 4 * `setFirstName` - changes the value of the firstName property of the given person object to the given value
  * `setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Jaffe'}`
  * `setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Solano'}`
*/
function setFirstName(person, newFirstName){
 
 //update the first name using the (.)
  person.firstName = newFirstName;
  return person; //return the modified object
 }
 //defined a person object
 let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
 let person2 = {firstName: 'Petra', lastName: 'Solano'};
console.log(setFirstName(person1, 'Redacted'));
console.log(setFirstName(person2, 'Anthony'));

/* 5 * `setAge` - changes the value of the age property of the given person object to the given value
  * `setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 45}`
  * `setAge({firstName: 'Petra', lastName: 'Solano', age: 29}, 35) // -> {firstName: 'Petra', lastName: 'Solano', age: 35}`
*/

function setAge(person, newAge){
   //update the age using the (.)
   person.age = newAge;
   return person; //return the modified object
  }
  //defined a person object
  let person3 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
  let person4 = {firstName: 'Petra', lastName: 'Solano', age: 29};
 console.log(setAge(person3, 45));
 console.log(setAge(person4, 35));

 /* 6 * `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property
  * `giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}`
  * `giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}) // -> {firstName: 'Solano', lastName: 'Solano', age: 30}`
  * `giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}`*/
  


function giveBirthday(person){
  //update the age using the (.)
  //if (person.hasProperty('age')){ // this is how Dominic did it.
  if (person.age >= 0){ // this is how I did it. Both worked!
  person.age += 1; 
} else {
  person.age = 1;
}
  return person; //return the modified object
 }
 //defined a person object
 //let person3 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
 //let person4 = {firstName: 'Petra', lastName: 'Solano', age: 29};
console.log(giveBirthday(person3));
console.log(giveBirthday(person4));

/* 7 * `marry` - sets the marital status of both given people to `true` and sets each person's `spouseName` property to be the full name of the other

```
const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: false}
marry(person1, person2)
console.log(person1) // -> {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
console.log(person2) // -> {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
```*/
const person5 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person6 = {firstName: 'Petra', lastName: 'Solano', married: false}

function marry(person5, person6){

  
  person5.married = true;
  person6.married = true;
  person5.spouseName = person6.firstName + " " + person6.lastName
  person6.spouseName = person5.firstName + " " + person5.lastName
 }
 marry(person5, person6);
console.log(person5, person6);


/* 8* `divorce` - changes the marital status to `false` and removes the `spouseName` property from both given people
```
const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const person2 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
divorce(person1, person2);
console.log(person1) // -> {firstName: 'Colin', lastName: 'Jaffe', married: false} 
console.log(person2) // -> {firstName: 'Petra', lastName: 'Solano', married: false}
```
*/

function divorce(person5, person6){
  
  person5.married = false;
  person6.married = false;
  delete person5.spouseName;
  delete person6.spouseName;
}
divorce(person5, person6);
console.log(person5);
console.log(person6);

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
