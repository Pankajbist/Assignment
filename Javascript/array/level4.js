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
count=0;
userArr.forEach(element=>{
  if(element==user)
  {
    count++;}
})
count

