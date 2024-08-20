console.log("Hello");
// alert("js learning start")
let header=document.getElementById("heading")
console.dir(header);

let elements = document.querySelector("p");
console.dir(elements)

let change=document.querySelector("h2")
change.innerText=change.innerText+" from apna college";
console.dir(change)

let divs=document.querySelectorAll(".box")

let idx=1;
for (let div of divs)
{
    div.innerHTML=`new unique value is ${idx}`;
    idx++;
}
