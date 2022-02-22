

var womensData = [{
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster ",
    tags:"Men Cotton Pure Cotton",
    price: 1549,
    strikedoffprice: 1799,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1459,
    strikedoffprice: 1235,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 1249,
    strikedoffprice: 1749,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1459,
    strikedoffprice: 1235,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 699,
    strikedoffprice: 1245,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 1399,
    strikedoffprice: 2799,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1099,
    strikedoffprice: 1249,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 1249,
    strikedoffprice: 1489,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1459,
    strikedoffprice: 1235,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 849,
    strikedoffprice: 2599,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1550,
    strikedoffprice: 2599,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Highlander",
    tags:"Men Cotton Pure Cotton",
    price: 1399,
    strikedoffprice: 6599,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 1099,
    strikedoffprice: 1249,
  },
  {
    image_url: "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
    name: "Roadster",
    tags:"Men Cotton Pure Cotton",
    price: 749,
    strikedoffprice: 1299,
  },
 
];

localStorage.setItem("womensDataa", JSON.stringify(womensData));

var allWomenDeta = JSON.parse(localStorage.getItem("womensDataa")) || []

function displayDataWomen(allWomenDeta){
  document.querySelector("#products").innerHTML = ""
allWomenDeta.map(function(elem)
{
    var maindiv=document.createElement("div")
    var priceDiv=document.createElement("div")
    priceDiv.setAttribute("class","priceDiv")
    var div1=document.createElement("div")
    var div2=document.createElement("div")

    var image=document.createElement("img")
    image.setAttribute("src",elem.image_url)

    var name=document.createElement("h4")
    name.innerText=elem.name
    var tags=document.createElement("p")
    tags.innerText=elem.tags
    tags.setAttribute("id","tag")
    price = document.createElement("h4")
    price.innerText =elem.price

    strikeprice = document.createElement("h5")
    strikeprice.innerText = elem.strikedoffprice
    strikeprice.style.textDecoration="line-through"
    

    btn = document.createElement("button")
   btn.innerText = "WishList"
   
   div1.append(price)
   div2.append(strikeprice)
   priceDiv.append(div1,div2)
   maindiv.append(image,name,tags,priceDiv,btn)
   document.querySelector("#products").append(maindiv)
})
}
displayDataWomen(allWomenDeta)
