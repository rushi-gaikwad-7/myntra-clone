 dealsData = [{
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/8131f534-7d4a-4316-aaec-2e7f61e304081645367689519-Unique-Casual-Wear.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/3e44bec2-c681-4ab2-b88e-684d458bb8321645367689499-Dresses.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/72a30a8d-7ad8-452e-a200-ac8feb9bc4411645367689468-Home-Decor.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/6e9fc2c7-b329-4a32-85f1-383d8bdb64151645367689479-Formal-Shoes.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/80063cc4-68f0-4414-be14-037408be1f521645367689508-Best-Of-Accessories.jpg"
     },
 ];

 dealsData.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img = document.createElement("img")
     img.setAttribute("src", el.img)

     box.append(img);
     document.querySelector("#dealsDiv").append(box);
 });

 bigDeals = [{
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
     },
 ];

 bigDeals.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img = document.createElement("img")
     img.setAttribute("src", el.img)

     box.append(img);
     document.querySelector("#bigdealsDiv").append(box);
 });

 catagoryData = [{
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg",
     },

 ];

 catagoryData.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img1 = document.createElement("img")
     img1.setAttribute("src", el.img1)
     var img2 = document.createElement("img")
     img2.setAttribute("src", el.img2)

     box.append(img1, img2);
     document.querySelector("#categoryDiv").append(box);
 });

 brandData = [{
         img1: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg",
     },
     {
         img1: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg",
         img2: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg",
     },
 ];

 brandData.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img1 = document.createElement("img")
     img1.setAttribute("src", el.img1)
     var img2 = document.createElement("img")
     img2.setAttribute("src", el.img2)

     box.append(img1, img2);
     document.querySelector("#brandDiv").append(box);
 });

 luxeData = [{
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9b74665b-4512-44aa-a0b2-f7758e5eeb661637055308450-WP-PhaseEight.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9a1595d0-5d98-435d-be8c-b86597f068bf1637055308456-WP-Swarovski.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/77820f04-69d6-476a-b12b-c53385c4c1dc1637055409214-MP-Farah.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/dab46379-24d2-4825-a1d8-ab35da877cf81637055409223-MP-HUGOBoss.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/90da2fc5-16d3-4efd-baaa-f7019311c6351637054602799-HP-Tissot.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/da3e7c00-2415-4696-a79d-8606628b82ca1637054602783-HP-POLORalphLauren.jpg"
     },
 ];

 luxeData.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img = document.createElement("img")
     img.setAttribute("src", el.img)

     box.append(img);
     document.querySelector("#luxeDiv").append(box);
 });

 trendData = [{
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg"
     },
 ];

 trendData.map(function (el, i, arr) {

     var box = document.createElement("div");
     var img = document.createElement("img")
     img.setAttribute("src", el.img)

     box.append(img);
     document.querySelector("#trendDiv").append(box);
 });

  indianWereData = [
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
     },
     {
         img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
     },
 ];

console.log(indianWereData)

indianWereData.map(function (el, i,arr) {

    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", el.img);

    box.append(img);
    document.querySelector("#indianwear").append(box);
});


  sportData = [
    {
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
},

];

sportData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#sportwear").append(box);
});



  footwearData = [
    {
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
},

];

footwearData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#footwear").append(box);
});

accessoriesData = [
    {
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/76d839cb-b561-42a5-aaa3-6d4e49d0c56f1598030134822-Content-mostselling-Footwear-Rocia.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
},

];

accessoriesData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#accessories").append(box);
});




