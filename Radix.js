function DecToBin() {
    var txt = document.getElementById("decimal").value;
    document.getElementById("DecToBin").innerHTML = txt;
  }

document.getElementById("DecToBin").addEventListener("click", DecToBin);