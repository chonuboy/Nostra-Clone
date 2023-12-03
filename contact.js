var openmenu=document.querySelector(".nav__menu__icon")
var navmenu=document.querySelector(".navmenu")
var closemenu=document.querySelector(".close__menu")
openmenu.addEventListener("click",function(){
    navmenu.style.left="0"
})
closemenu.addEventListener("click",function(){
    navmenu.style.left="-50%"
})