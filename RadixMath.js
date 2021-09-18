function DecToBin() {
    dec = document.getElementById("decimal").value;
    bin=(dec>>>0).toString(2);
    document.getElementById("DecToBin").innerHTML = bin;
}

document.getElementById("DecToBinButton").addEventListener("click", DecToBin);

function DecToHex() {
    dec = document.getElementById("decimal").value;
    hex = (dec>>>0).toString(16);
    document.getElementById("DecToHex").innerHTML = hex;
}

document.getElementById("DecToHexButton").addEventListener("click", DecToHex);

function BinToDec() {
    bin = document.getElementById("binary").value;
    dec = parseInt(bin, 2);
    document.getElementById("BinToDec").innerHTML = dec;
}

document.getElementById("BinToDecButton").addEventListener("click", BinToDec);

function BinToHex() {
    bin = document.getElementById("binary").value;
    hex = (parseInt(bin, 2)>>>0).toString(16);
    document.getElementById("BinToHex").innerHTML = hex;
}

document.getElementById("BinToHexButton").addEventListener("click", BinToHex);

function HexToDec() {
    hex = document.getElementById("hexadecimal").value;
    dec = parseInt(hex, 16);
    document.getElementById("HexToDec").innerHTML = dec;
}

document.getElementById("HexToDecButton").addEventListener("click", HexToDec);

function HexToBin() {
    hex = document.getElementById("hexadecimal").value;
    bin = (parseInt(hex, 16)>>>0).toString(2);
    document.getElementById("HexToBin").innerHTML = bin;
}

document.getElementById("HexToBinButton").addEventListener("click", HexToBin);