document.addEventListener("keydown", Move);
var x = 220;
function Move(e){
    if ((e.key=="a") && (document.getElementById((x+1).toString()).innerHTML=="<img src=\"Air.png\">")){
        document.getElementById(x.toString()).innerHTML="<img src=\"Air.png\">"; 
        x+=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Guy.png\">";

    } else if ((e.key=="d") && (document.getElementById((x-1).toString()).innerHTML=="<img src=\"Air.png\">")){
        document.getElementById(x.toString()).innerHTML="<img src=\"Air.png\">"; 
        x-=1;
        document.getElementById(x.toString()).innerHTML="<img src=\"Guy.png\">";
        
    }
}