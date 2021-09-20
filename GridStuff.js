document.getElementById("1").innerHTML="<img src=\"Car.png\">";
var x = 1;
document.getElementById("50").innerHTML="<img src=\"Golf.png\">"
document.addEventListener("keydown", Move);

function Move(event){
    if ((e.key=="s") && ((x+10)<=50)){
        document.getElementById(x.toString()).innerHTML=""; 
        x+=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
    } else if ((e.key=="w") && ((x-10)>0)){

        document.getElementById(x.toString()).innerHTML=""; 
        x-=10;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";

    } else if ((e.key=="d") && (((x)%10)!=0)){
            document.getElementById(x.toString()).innerHTML=""; 
            x+=1;
            document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";

    } else if ((e.key=="a") && (((x-1)%10)!=0) && ((x-1)!=0)){
        document.getElementById(x.toString()).innerHTML=""; 
        x-=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Car.png\">";
        
    }
    if(x==50){
        document.getElementById("grid-container").innerHTML="Congrats";
        document.removeEventListener("keydown", Move);
    }
}
    