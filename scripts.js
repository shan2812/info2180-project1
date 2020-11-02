function valid(){
    var x = document.forms.length;
    if(x !== ""){
        alert("thanks");
    }
    else {
        alert("do over");
    }
}
var y = document.getElementsByClassName("message")[0].innerHTML= valid();
document.getElementsByClassName("btn").addEventListener("click", y);