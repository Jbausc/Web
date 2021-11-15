document.addEventListener("keydown", Move);
var x = 220;

for(let i = 160; i<=199;i++){
    document.getElementById("" + i).addEventListener("click", breaking);
}

var blocks = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function breaking(){
    var gridNum = parseInt(this.id);
    if (blocks[gridNum-1]==4){
    blocks[gridNum-1]=0;
   }
   blocks[gridNum-1]+=1;
    document.getElementById(this.id).innerHTML="<img src=\"Stage" + blocks[gridNum-1] +".png\">";
}


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