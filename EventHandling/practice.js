let modebtn = document.querySelector("#btn");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    // alert("You are trying to change the mode");
    if(currmode==="light")
    {
        currmode="dark";
        body.classList.remove("white");
        body.classList.add("dark");
    }
    else{
        currmode="light";
        body.classList.remove("dark");
        body.classList.add("white");
    }

    console.log(currmode);
});


let hover=document.querySelector("#hover");
// let para = document.querySelector("");
// let hav=false;
hover.addEventListener("mouseenter",()=>{
    hover.classList.add("red");
});

hover.addEventListener("mouseleave",()=>{
    hover.classList.remove("red");
});