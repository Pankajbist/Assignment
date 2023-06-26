//Q1 calculate the percentage he scored in the exams out of total 150 score
const obj = {
    computer: 42,
    maths: 42,
    science: 50
}


let calcPerc=(obj)=>{
// return `${(((obj.computer+obj.maths+obj.science)/150)*100).toFixed(2)}%`
let total=((Object.values(obj).reduce((sum,value)=>{return sum+=value;},0)/150)*100)
return `${total.toFixed(2)}%`

}
calcPerc(obj)

//
//Q2


const userDetails = {
    maths: 23,
      name: "Pankaj",
    science: 35,
    gk: 30,
    cs: 20,

    phy: 70
};

const obj = {
    userName: userDetails.name,
    subjectCodes: Object.keys(userDetails).filter(key => key !== 'name').map(code => code.charAt(0).toUpperCase()),
    subjectScores: Object.values(userDetails).filter(value => typeof value === 'number')
};

console.log(obj);




// output 
// {
//   userName: 'Pankaj',
//   subjectCodes: [ 'M', 'S', 'G', 'C', 'P' ],
//   subjectScores: [ 23, 35, 30, 20, 70 ]
// }



