// Changing button color on click, Both card and cash
function card(){
    document.querySelector("#cred").style.background = "black";
    document.querySelector("#cash").style.background = "white"
}

function cash(){
    document.querySelector("#cash").style.background = "black";
    document.querySelector("#cred").style.background = "white";
}

// before submit, checking if card , all fields are filled or 
function checkOut(){

    var obj = {};  // to push to local storage

    if (document.querySelector("#cred").style.background == "black")
    {
        var name = document.querySelector("#name")
        var card = document.querySelector("#cardnum")
        var date = document.querySelector("#expiry")
        var cvv  = document.querySelector("#cvv")
        if (name.value == "")
        {
            alert("Enter name")
        }

       else if (card.value.length != 16)
        {
            alert("Enter Card Number correctly")
        }

        else if (date.value == "")
        {
            alert("Enter month and year of the Card")
        }

        else if (cvv.value.length != 3)
        {
            alert("Enter CVV correctly")
        }
        else
        {  
             obj = {
            mode:"Credit/Debit Card" // storing mode of payment info
            }
            localStorage.setItem("mode",JSON.stringify(obj))

            window.location.href = "checkout.html"
        } 
        
    }
    
    else {
        obj = {
            mode :"Cash"
        }
        localStorage.setItem("mode",JSON.stringify(obj))
        window.location.href = "checkout.html"
    }

    
}