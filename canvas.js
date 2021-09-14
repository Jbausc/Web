window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d")

    canvas.height=(window.innerHeight)/2;
    canvas.width=(window.innerWidth)/2;

    let painting = false;

    function startPosition(){
        painting = true;
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=5;
        ctx.lineCap="round";


        ctx.lineTo(e.clientX, e.clientY-50);
        ctx.stroke();
    }


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw)
})

