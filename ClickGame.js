for(let i = 1; i<=10;i++){
    document.getElementById("" + i).addEventListener("click", breaking);
}

var blocks = [1,1,1,1,1,1,1,1,1,1];

function breaking(){
    var gridNum = parseInt(this.id);
    if (blocks[gridNum-1]==4){
    blocks[gridNum-1]=0;
   }
   blocks[gridNum-1]+=1;
    document.getElementById(this.id).innerHTML="<img src=\"Stage" + blocks[gridNum-1] +".png\">";
}