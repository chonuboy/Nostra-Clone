var adclose = document.getElementById("popup__close")
var ad = document.querySelector(".add__popup")
adclose.addEventListener("click", function () {
    ad.classList.remove("add__popup")
})
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
        var temp = product.querySelector("specs").innerHTML
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
var search=document.getElementById("searchbox")
var products=document.getElementById("products")
var productlist=products.querySelectorAll("div")
console.log(products)
search.addEventListener("keyup",function(){
    var searchtext=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        if(productlist[i].querySelector("h2").textContent.toUpperCase().includes(searchtext)){
            productlist[i].style.display="block"
        }else{
            productlist[i].style.display="none"
        }
    }
})