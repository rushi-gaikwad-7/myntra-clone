var wishListItems = JSON.parse(localStorage.getItem("wishListData")) || []



function showWishList(wishListItems) {
  document.querySelector("#maindiv").innerHTML = ""
  wishListItems.map(function(elem)
  {
    var maindiv=document.createElement("div")
    var priceDiv=document.createElement("div")
    priceDiv.setAttribute("class","priceDiv")
    var div1=document.createElement("div")
    var div2=document.createElement("div")
    var div3=document.createElement("div")

    var image=document.createElement("img")
    image.setAttribute("src",elem.img)
    
    var brand=document.createElement("p")
    brand.innerText=elem.brand

    var name=document.createElement("p")
    name.innerText=elem.name

    var price = document.createElement("p")
    price.innerText ="Rs."+elem.price

    var strikeprice = document.createElement("p")
    strikeprice.innerText = "Rs."+elem.strikeprice
    strikeprice.style.textDecoration="line-through"
    
    var discount=document.createElement("p")
    discount.innerText="("+elem.discount+"% OFF)" 
   
   div1.append(price)
   div2.append(strikeprice)
   div3.append(discount)
   priceDiv.append(div1,div2,div3)
   maindiv.append(image,brand,name,priceDiv)
   document.querySelector("#maindiv").append(maindiv)
  })
    
  }
  showWishList(wishListItems)