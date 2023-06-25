//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['hari','shyam','thakur']

allUsers.includes(name)
//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']
count =0;
userArr.forEach(element=>{
  if(element==user)
    {
count++;
}
})

count      

//Q2) calculate the sum of all the odd numbers inside this nested array
const newArr = [[4,5], [5,7], [7,2]]
 
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