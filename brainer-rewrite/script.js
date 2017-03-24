//THIS IS THE SIMPLE VERSION WITH PREDIFINED (OPTIMAL) VALUES FOR USER FRIENDLIENESS >> EDIT WITH CAUTION


//init stuff
var button = document.getElementById("proceed");
button.addEventListener("click", memorize);
printBelow("Press proceed to start");
printAbove("Press proceed to start");


function memorize () {
    printAbove("Memorize this:");
    printBelow("Press proceed when done");
    //button.removeEventListener("click", memorize);
    
    for (i = 0; i < 4; i++) {
        var tmp = rand(4);
        printToInputField(tmp);
        memoArray.push(tmp);
        alert(i);
        return;
    }
}



//GLOBAL vars
var memoArray = new Array();



//GLOBAL functions
function getInputValue() {
    return document.getElementById("input").value;
}

function printAbove(text) {
    document.getElementById("aboveMessage").innerHTML = text;
    return;
}

function printBelow(text) {
    document.getElementById("belowMessage").innerHTML = text;
    return;
}

function printToInputField(content) {
    document.getElementById("input").value = content;
    return;
}

function rand(length, current) {
    current = current ? current : '';
    return length ? rand(--length, "0123456789abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 36)) + current) : current; //bak 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
}