for(let i = 1; i<=10;i++){
    document.getElementById("Button-" + i).addEventListener("click", breaking);
}

function breaking(e){
    document.getElementById(this.id).innerHTML("Test");
}