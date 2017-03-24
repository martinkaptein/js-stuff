var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var h3 = document.getElementById("h3");
var resultLocation = document.getElementById("result");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
function main () {
    var select = document.getElementById("select");
    var selectedMethod = select.options[select.selectedIndex].value;
    selectedMethod = parseInt(selectedMethod);
    
    switch (selectedMethod) {
        case 1:
            alert("heyhey");
            n1.style.visibility = "visible";
            break;
        case 2:
            n2.style.visibility = "visible";
            break;
        case 3:
            n3.style.visibility = "visible";
            break;
    }
    
    select.style.visibility = "hidden";
    h3.style.visibility = "hidden";
    button1.style.visibility = "visible";
}

function go () {
    var highest = document.getElementById("highest").value;
    var lowest = document.getElementById("lowest").value;
    
    if (highest == false) {
        highest = Math.floor(Math.random() * (999999999 - lowest + 1)) + lowest;
    }
    
    if (lowest == false) {
        lowest = Math.floor(Math.random() * (highest - (-999999999) + 1)) + (-999999999);
    }
    var result = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
    
    resultLocation.innerHTML = result;
    button2.style.visibility = "visible";
}

    
