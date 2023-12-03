var adclose = document.getElementById("popup__close")
var ad = document.querySelector(".add__popup")
adclose.addEventListener("click", function () {
    ad.classList.remove("add__popup")
})
window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal")

    for (i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        if (revealtop < windowheight) {
            reveals[i].classList.add("active")
        }
    }
}
var openmenu = document.querySelector(".nav__menu__icon")
var navmenu = document.querySelector(".navmenu")
var closemenu = document.querySelector(".close__menu")
openmenu.addEventListener("click", function () {
    navmenu.style.left = "0"
})
closemenu.addEventListener("click", function () {
    navmenu.style.left = "-50%"
})

var filterarr = []
var boxes = document.getElementsByName("box")
console.log(boxes)

boxes.forEach((box) => {
    box.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterarr.push(e.target.value)
            console.log(filterarr)
            update()

        }
        else {
            filterarr = filterarr.filter(item => item !== e.target.value);
            update()
        }



    })
})


function update() {
    var productList = document.querySelectorAll(".product__container")
    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]
        console.log(product)
        var temp = product.querySelector("tags").innerHTML
        console.log("elemen" + temp)
        const tempFilterArray = temp.split(',');
        console.log("tempfilterarray" + tempFilterArray)
        console.log("filterarr" + filterarr)
        filterarr.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }
            })
        })

        if (!check && filterarr.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }
    };
}

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100
    if(slidermargin>100)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})
sliderleftbutton.addEventListener("click",function(){
    if(slidermargin==0){
    slidermargin=100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }else{

    slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
}
})
var like=document.querySelectorAll(".white")

like.forEach((heart)=>{
    heart.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("white-heart")>0)
        {
            e.target.src="./Images/red-haeart.png"
        }
        else{
            e.target.src="./Images/white-heart.png"
        }
    })
})





