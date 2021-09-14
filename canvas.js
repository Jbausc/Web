window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = 'white';
    ctx.fillRect = (5,5,5,5);

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
        ctx.lineWidth=10;
        ctx.lineCap="round";

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke();
    }


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw)
})

