let div=document.querySelector("div")
console.log(div);

let id=div.getAttribute("id");
console.log(id)

let para = document.querySelector("p")
console.log(para.getAttribute("class"))

para.setAttribute("class","newclass");

let division= document.querySelector("div");

division.style.backgroundColor="green"
division.style.height="250px"

// new element creation

let newbtn=document.createElement("button");
newbtn.innerText ="click me!";
console.log(newbtn);

//pushing the element into the screen/page

let dick= document.querySelector("div");
dick.append(newbtn);//adds at the end of a node(inside);
//dick.prepend(newbtn);//adds at the start of the node(inside);
//dick.before(newbtn);//adds before the node (outside);
//dick.after(newbtn);//adds after the node (outside);


let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi its a new heading add from javascript</i>";
document.querySelector("body").prepend(newHeading);

//deleting the element
//let paras= document.querySelector("p");//accessing the element
//paras.remove();//deleting the element



