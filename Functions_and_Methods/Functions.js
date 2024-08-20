// function addition (a,b)
// {
//     let sum = a+b;
//     console.log(sum);
// }

// addition(5,9);


//Arrow functions

// const sum= (a,b)=>{
//     console.log(a+b);
// }
// sum(2,6);

//create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string

// function countVowel(str){
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//             count++;
//     }
//     console.log(count);
// }

// countVowel("My name is Raj");


// forEach Loop in Arrays

//let arr=[1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arr.forEach((val)=>
// {
//     console.log(val);
// });


//practice question:- for a given array of a numbers, print the square of each value using the forEach Loop;

// arr.forEach(function square(val)
// {
//     console.log(val*val);
// });


let array=[1,22,6,2,6,9,96,25,66]
let evenarr=array.filter((val)=>
{
    return val%2==0;
});
console.log(evenarr);


let marks=[97,64,32,49,99,96,86];
let toppers=marks.filter((val)=>
{
    return val>=90;
})

console.log(toppers)


// let num=readline("Enter a number");
// let arr=[];

// for(let i=1;i<=num;i++)
// {
//     arr[i-1]=i;
// }
// console.log(arr);

//use the reduce method to calculate sum of all numbers in the array ;

let sum=array.reduce((res,curr)=>
{
    return res+curr;
});

console.log(sum);

let fact=array.reduce((res,curr)=>
{
    return res*curr;
});

console.log(fact);