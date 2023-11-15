let photos = document.querySelectorAll(".container")
let cart = document.querySelector("#cart")
let priceBtn = document.querySelector("#showPrice")
let totalPrice=0

photos.forEach(function(item){
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"))
        cart.innerHTML += " + " + item.textContent
        if(cart.innerHTML != ""){
            priceBtn.style.display = "block"
            priceBtn.style.fontSize = "20px"
        }
    }
    priceBtn.onclick = function(){
        cart.innerHTML += " = " + totalPrice
    }
})