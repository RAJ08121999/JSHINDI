// let marks=[1,2,3,4,5,6,7,8,9]

// console.log(marks);
// console.log(marks.length)


// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }

// for of 

// for(let ele of marks){
//     console.log(marks);
// }

//practice question

// let score =[85,97,44,37,76,60]
// let sum=0;
// for(let points of score)
// {
//     sum += points;
// }
// console.log(sum);
// let avg_marks=sum/score.length;
// console.log(avg_marks);


let prices=[250,645,300,900,50]
//find 10% off and reprint the ans

for(let discounts of prices)
{
    discount=discounts*90/100;
    console.log(discount);
}