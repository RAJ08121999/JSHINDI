// it is a single line comment
/* it is a multi line comment 
i am going to comment these lines*/

// Arithmetic operators

let num1=5;
let num2=7;
console.log("a=",num1,"+"+"b=",num2,"=",num1+num2);
console.log("a=",num1,"+"+"b=",num2,"=",num1-num2);
console.log("a=",num1,"+"+"b=",num2,"=",num1*num2);
console.log("a=",num1,"+"+"b=",num2,"=",num1/num2);
console.log("a=",num1,"+"+"b=",num2,"=",num1%num2);

console.log("a=",num1);
console.log("b=",num2);

//unary operator

num1=++num1;
console.log(num1)

// console.log(num1);

num1=--num1
console.log(num1)

// logical operators

let a=6;
let b=5;

let cond1= a>b;
let cond2= a===6;
let cond3= true;
console.log("condition1 && condition2=",cond1&&cond2);

console.log("condition1 or condition2=",cond1||cond2);

console.log("condition3 is by default true and i am using not operator",!cond3)


//conditional statements

let age =16;
if(age>=16)
{
    console.log("you are eligible to vote");
}
else{
    console.log("try again next year");
}
