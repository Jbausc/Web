document.getElementById("1").innerHTML="<img src=\"Car.png\">";
var x = 1;
document.addEventListener("keydown", function(e){
    if ((e.key=="w") && ((x-10)>0)){
        document.getElementById(x.toString()).innerHTML=""; 
        x-=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    }
})
document.addEventListener("keydown", function(e){
    if ((e.key=="a") && (((x-1)%10)!=0) && ((x-1)!=0)){
        document.getElementById(x.toString()).innerHTML=""; 
        x-=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    }
})
document.addEventListener("keydown", function(e){
    if ((e.key=="s") && ((x+10)<=50)){
        document.getElementById(x.toString()).innerHTML=""; 
        x+=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    }
})
document.addEventListener("keydown", function(e){
    if ((e.key=="d")){
        document.getElementById(x.toString()).innerHTML=""; 
        x+=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    }
})