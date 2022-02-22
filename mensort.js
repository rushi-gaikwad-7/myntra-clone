function sorting()
{
  var prices = document.querySelector("#sortby").value;
  console.log(prices)
  if(prices=="hightolow")
  {
    allWomenDeta.sort(function (a,b) {
      return Number(b.price) - Number(a.price);
    });
    //console.log("ok")
    displayDataWomen(allWomenDeta)
  }
  if(prices=="lowtohigh")
  {
   allWomenDeta.sort(function (a,b) {
   return Number(a.price) - Number(b.price);
 })
 displayDataWomen(allWomenDeta)
  }
}