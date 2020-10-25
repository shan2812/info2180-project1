document.getElementsByClassName("btn").addEventListener("click",validemail());
function validemail(){
    var email, msg;
    email = document.getElementsByClassName("btn").value;
    if (email = ""){
        msg = "Thank you! Your email address has been added to our mailing list!";
    }
    else{
        msg = "Please enter a valid email address";
    }
    document.getElementsByClassName("message")[0].innerHTML = msg;
}

