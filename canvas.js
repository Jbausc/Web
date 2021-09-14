window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d")

    canvas.height=(window.innerHeight)/2;
    canvas.width=(window.innerWidth)/2;

    let painting = false;

    function startPosition(){
        painting = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY-57);
    }

    function finishedPosition(){
        painting = false;
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=5;
        ctx.lineCap="round";


        ctx.lineTo(e.clientX, e.clientY-57);
        ctx.stroke();
    }


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw)

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      

      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
})

