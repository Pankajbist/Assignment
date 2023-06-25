//Q1
const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
  
// return only array of ids: expected output  [3,5,6]
 myDetails.map((item)=>{
   return item.id
 })

console.log(item)

//Q2

//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},

// ]
const userDetails = [
    { score: 0, name: 'hari', marks: [10, 3, 23] },
    { score: 0, name: 'shyam', marks: [50, 23, 23] },
    { score: 0, name: 'shyam', marks: [20, 13, 43] },
];

for (let i = 0; i < userDetails.length; i++) {
    const marks = userDetails[i].marks;
    const totalScore = marks.reduce((sum, mark) => sum + mark, 0);
    userDetails[i].score = totalScore;
}

console.log(userDetails);


