var close = document.querySelector("#close");
var open = document.querySelector("#open");
var right = document.querySelector(".Right");
var left = document.querySelector(".Left");
var day = document.querySelector(".day");
var night = document.querySelector(".night")
var button = document.querySelector(".lastbtn")

open.addEventListener("click", function(){
    open.style.display = "none"
    right.style.top = "0%"
})

close.addEventListener("click", function(){
    open.style.display = "initial"
    right.style.top = "-110%"
})

night.addEventListener("click", function(){
    console.log("clicked")
    left.style.backgroundColor = "rgba(41, 36, 36, 0.893)";
    right.style.backgroundColor = "rgba(41, 36, 36, 0.893)";
})
day.addEventListener("click", function(){
    console.log("clicked")
    left.style.backgroundColor = "rgb(234, 231, 231)";
    right.style.backgroundColor = "white";
})

document.querySelector(".lightblue").addEventListener("click", function(){
    button.style.backgroundColor = "#3d80dd"
    
})
document.querySelector(".lightgreen").addEventListener("click", function(){
    button.style.backgroundColor = "lightgreen"
    
})
document.querySelector(".orange").addEventListener("click", function(){
    button.style.backgroundColor = "orange"
    
})
document.querySelector(".voilet").addEventListener("click", function(){
    button.style.backgroundColor = "#440779"
    
})
document.querySelector(".lightseagreen").addEventListener("click", function(){
    button.style.backgroundColor = "lightseagreen"
    
})
document.querySelector(".yellow").addEventListener("click", function(){
    button.style.backgroundColor = "#ddcc0e"
    
})
document.querySelector(".red").addEventListener("click", function(){
    button.style.backgroundColor = "red"
    
})
document.querySelector(".tomato").addEventListener("click", function(){
    button.style.backgroundColor = "tomato"
    
})


