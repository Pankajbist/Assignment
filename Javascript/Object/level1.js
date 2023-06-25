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

