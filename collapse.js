let buttonCollapse = document.querySelectorAll(".btn-collapse");

let myButtonCollapse =Array.from(buttonCollapse);

myButtonCollapse.forEach(x=>x.addEventListener("click", ()=>{
x.nextElementSibling.classList.toggle("show-collapse");
}));