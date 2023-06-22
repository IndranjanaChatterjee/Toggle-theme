const circle=document.querySelector(".circle");
const get=document.querySelector(".container");
circle.addEventListener("click",()=>
{
    circle.classList.toggle("move");
    document.body.classList.toggle("color");
    get.classList.toggle("change");
    console.log("hi");
})
