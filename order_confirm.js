function modepayment(){

    var payment = JSON.parse(localStorage.getItem("mode"))
    document.querySelector("#mode").textContent = payment.mode;
}
modepayment()

var kfcbill = JSON.parse(localStorage.getItem("kfccart"))

document.getElementsByClassName("price")[0].textContent = kfcbill.product_price
document.getElementsByClassName("gst")[0].textContent = kfcbill.tax
document.getElementsByClassName("handling")[0].textContent = kfcbill.handling
document.getElementsByClassName("total")[0].textContent = kfcbill.total
document.getElementById("item").insertAdjacentText("afterbegin",kfcbill.count)

function homepage(){
    window.location.href = "index.html"
}

var addrss = JSON.parse(localStorage.getItem("address"))
console.log(addrss)
document.querySelector("#input").textContent =  addrss.address
