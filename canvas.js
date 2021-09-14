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
        ctx.moveTo(e.clientX, e.clientY-75);
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap="round";

        ctx.moveTo(e.clientX, e.clientY-75)
        ctx.lineTo(e.clientX, e.clientY-75)
        ctx.stroke();
    }


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw)
})

