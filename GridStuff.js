document.getElementById("1").innerHTML="<img src=\"Car.png\">";
var x = 1;
document.getElementById("10").innerHTML="<img src=\"Intro.png\">";
document.getElementById("20").innerHTML="<img src=\"RadixCalc.png\">";
document.getElementById("30").innerHTML="<img src=\"ClickGame.png\">" ;
document.getElementById("15").innerHTML="<img src=\"oops.png\">";
document.getElementById("28").innerHTML="<img src=\"oops.png\">";
document.getElementById("42").innerHTML="<img src=\"oops.png\">";

document.addEventListener("keydown", Move);
for(let i=2;i<=50;i++){
    if(i!=10 && i!=20 && i!=30 && i!=15 && i!=28 && i!=42){document.getElementById(i.toString()).innerHTML="<img src=\"grass.png\">"; 
    }
}
function Move(e){
    if ((e.key=="s") && ((x+10)<=50)){
        document.getElementById(x.toString()).innerHTML="<img src=\"grass.png\">"; 
        x+=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    } else if ((e.key=="w") && ((x-10)>0)){

        document.getElementById(x.toString()).innerHTML="<img src=\"grass.png\">"; 
        x-=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";

    } else if ((e.key=="d") && (((x)%10)!=0)){
        document.getElementById(x.toString()).innerHTML="<img src=\"grass.png\">"; 
            x+=1;
            document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";

    } else if ((e.key=="a") && (((x-1)%10)!=0) && ((x-1)!=0)){
        document.getElementById(x.toString()).innerHTML="<img src=\"grass.png\">"; 
        x-=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
        
    }
    if(x==10){
        location.href="https://jbausc.github.io/Web/Intro.html";
    } else if(x==20){
        location.href="https://jbausc.github.io/Web/Radix.html";
    } else if(x==30){
        location.href="https://jbausc.github.io/Web/ClickGame.html";
    } else if(x==15){
        document.getElementById(x.toString()).innerHTML="<img src=\"oops.png\">"; 
        x=1;
        document.getElementById("1").innerHTML="<img src=\"Car.png\">";
    } else if(x==28){
        document.getElementById(x.toString()).innerHTML="<img src=\"oops.png\">"; 
        x=1;
        document.getElementById("1").innerHTML="<img src=\"Car.png\">";
    } else if(x==42){
        document.getElementById(x.toString()).innerHTML="<img src=\"oops.png\">"; 
        x=1;
        document.getElementById("1").innerHTML="<img src=\"Car.png\">";
    } 
}
    