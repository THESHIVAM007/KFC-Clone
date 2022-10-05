function backtocart(){ // link to cart
    window.location.href = "cart.html"
}

function modepayment(){  // Importing mode of paymnet from payment.html thrugh local storage

    var payment = JSON.parse(localStorage.getItem("mode"))
    document.querySelector("#anchor > a").textContent = payment.mode;
}
modepayment()

var kfcCart = JSON.parse(localStorage.getItem("kfccart")) || [];
// {count: 1, product_price: 129, tax: 6.45, handling: 35, total: 170}
document.querySelector("#pricebox > h3").insertAdjacentText("afterbegin",kfcCart.count)

var totalprice = kfcCart.product_price;
givevalues(totalprice)

function couponclick(){
    var coupon = document.querySelector("#coupon").value 

    if (coupon == "100OFF" && totalprice > 598){
        
        totalprice = totalprice - 100;
    }
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
        count:count,
        product_price:price,
        tax:gst,
        handling:35,
        total:total
    }
    localStorage.setItem("kfccart",JSON.stringify(obj))
}

function paid(){

    var addrss = document.querySelector("#inputAddress").value
    console.log(addrss)
    var addObj = {address:addrss}
    localStorage.setItem("address",JSON.stringify(addObj))

    if (document.querySelector("#anchor > a").textContent == "Cash")
    {
        window.location.href = "order_confirm.html"
    }
    else
    {
        window.location.href = "card_otp.html"
    }
}

var phonenumber = JSON.parse(localStorage.getItem("userList"))
document.querySelector("#phone").textContent = phonenumber[phonenumber.length-1].cus_mobile

var name_email = JSON.parse(localStorage.getItem("detailList"))
document.querySelector("#name").textContent = name_email[name_email.length-1].name
document.querySelector("#email").textContent = name_email[name_email.length-1].email

