
// Q1) calculate the sum of the array using either for of or for in
//USING OF

const arr = [2,5,6,7]
let sum=0
 for(let i of arr){
   sum=sum+i
   // console.log(i)
   
 }
console.log(sum)

// Q2) remove from array if duplicate
// hint: temparr use garera include syntax use garne ho
  
const users = ['hari', 'shyam', 'hari'];

const tempArr = [];

for (let i = 0; i < users.length; i++) {
  if (!tempArr.includes(users[i])) {
    tempArr.push(users[i]);
  }
}

console.log(tempArr);
// We can also use this
//const users = ['hari', 'shyam', 'hari'];
// const uniqueUsers = [...new Set(users)];
// console.log(uniqueUsers);

// Q3) calculate the sum of all the odd numbers inside this nested array
// const newArr = [[4,5], [5,7], [7,2]]
 
const newArr = [[4, 5], [5, 7], [7, 2]];
let sum = 0;

for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr[i].length; j++) {
    if (newArr[i][j] % 2 !== 0) {
      sum += newArr[i][j];
    }
  }
}

console.log(sum);

