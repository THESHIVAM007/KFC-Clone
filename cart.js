var kfcCart = JSON.parse(localStorage.getItem("product")) || [];

addProduct()
setupPrice(kfcCart)
// Adding all values from local storage of product list  of customer
function addProduct()
{
    var item_box = document.createElement("div")
    item_box.setAttribute("class","itemBox")

    var image_box = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src",kfcCart.img)

    var contents = document.createElement("div")
    contents.setAttribute("class","content")
    var item_name = document.createElement("div")
    item_name.textContent = kfcCart.title;

    var category = document.createElement("div")
    category.textContent = kfcCart.category;

    var price = document.createElement("h4")
    price.textContent = kfcCart.price;
    price.setAttribute("class","price")

    image_box.append(image)
    contents.append (item_name,category,price)
    item_box.append(image_box,contents)
    document.querySelector("#cart").append(item_box)
}


function setupPrice(kfcCart)
{
    var totalprice = kfcCart.price;
    var total = totalprice + totalprice * 5 / 100;
    document.querySelector(".right > h5").textContent = total;

    givevalues(totalprice)
}

function givevalues(totalprice){
    // Adding total price and gst to HTML Page 
   var price =  document.getElementById("price").textContent = totalprice;
    // inserting rupee before the totalprice; 
    document.getElementById("price").insertAdjacentText("afterbegin", "₹"); 

    var gst = document.getElementById("gst").textContent = totalprice*5/100
    document.getElementById("gst").insertAdjacentText("afterbegin", "₹")

    var total = document.querySelector("#continue > span").textContent = Math.floor(totalprice + totalprice*5/100 + 35)
    document.querySelector("#continue > span").insertAdjacentText("afterbegin", "₹")

    var obj = {
        count:1,
        product_price:price,
        tax:gst,
        handling:35,
        total:total
    }
    localStorage.setItem("kfccart",JSON.stringify(obj))
    
    document.querySelector("#pricebox > h3").insertAdjacentText("afterbegin",obj.count);
}

function checkout(){

    window.location.href = "checkout.html"
}