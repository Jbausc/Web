for(let i = 1; i<=10;i++){
    document.getElementById("" + i).addEventListener("click", breaking);
}

var blocks = [1,1,1,1,1,1,1,1,1,1]

function breaking(){
    blocks[parseInt(this.id)-1]+=1;
    document.getElementById(this.id).innerHTML("<img src=\"Stage2.png\">");
}