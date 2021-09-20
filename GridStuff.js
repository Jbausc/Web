document.getElementById("23").innerHTML="<img src=\"Car.png\">";
var x = 23;
document.addEventListener("keydown", function(e){
    if (e.key=="w"){
        document.getElementById(x.toString()).innerHTML=x.toString(); 
        x-=5;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    }
})