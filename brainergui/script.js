//settings&var init
alert("init");
var GlobalUserInput;
var SubmitButton = document.getElementById("SubmitButton");
var GoButton = document.getElementById("GoButton");
var GlobalPrint = document.getElementById("question");
GlobalPrint.innerHTML = 'Welcome to Brainer!<br>Press Go to init!';
var ExerciseCount;
var MathExerciseCount = 0;
var MathExercisesDone = 0;
var NumberOfCorrectMathExercises = 0;
var NumberOfCorrectMemoExercises = 0;
var ExerciseCounterForLoop = 0;
var StringArray = new Array();
var v;
//SubmitButton.addEventListener("click", function () {alert("SubmitButton clicked");});
//alert("after event listener");


//GoButton.addEventListener("click", init);
var SettingStringArray = new Array();

SettingStringArray.push("Enter the number of memorise exercises you want to do! Default is 4.","Enter the desired length of the string you want to memorise! Default is 4.","How many math Exercises do you want to do? Default is 10.");

var SettingArray = new Array();
//position 0>>number of memo exercises
//pos1>>desired length of string
//pos2>>MathExerciseCount


//this retrieves all user settings required to run the programm
for (i = 0; i < 4; i++) {
    GlobalPrint.innerHTML = SettingStringArray[i];
    window.
    SubmitButton.addEventListener("click",getData(SettingArray));
}

function getData (SettingArray) {
    GlobalUserInput = document.getElementById("UserInputGlobal");
    SettingArray.push(GlobalUserInput);
    alert("inside get Data");
}








//function init () {
//    
//    GlobalPrint.innerHTML = 'Enter the number of memorise exercises you want to do!<br>Default is 4.';
//    SubmitButton.addEventListener("click", GetNumberOfMemoriseExercises);
//    
//}
//    
//function GetNumberOfMemoriseExercises () {
//    
//    GlobalUserInput = document.getElementById("UserInputGlobal");
//    ExerciseCount = parseInt(GlobalUserInput);
//    GlobalPrint.innerHTML = 'Enter the desired length of the string you want to memorise!<br>Default is 4.';
//    SubmitButton.addEventListener("click", GetDesiredStringLength);
//    
//}
//
//function GetDesiredStringLength () {
//    
//    GlobalUserInput = document.getElementById("UserInputGlobal");
//    StringLength = parseInt(GlobalUserInput);
//    GlobalPrint.innerHTML = 'How many math Exercises do you want to do?<br>Default is 10.';
//    SubmitButton.addEventListener("click", GetMathExerciseCountUser);
//    
//}
//
//function GetMathExerciseCountUser () {
//    
//    GlobalUserInput = document.getElementById("UserInputGlobal");
//    MathExerciseCount = parseInt(GlobalUserInput);
//    GlobalPrint.innerHTML = 'Sparky!<br>Press GO to start';
//    GoButton.addEventListener("click", main);
//    
//}






function main () {
    alert(ExerciseCounterForLoop);
    alert(ExerciseCount);
    while (ExerciseCounterForLoop < ExerciseCount) {
        alert("while loop started");
        function recursive () {
            function rand(length,current){
            current = current ? current : '';
            return length ? rand( --length , "0123456789abcdefghijklmnopqrstuvwxyz".charAt( Math.floor( Math.random() * 36 ) ) + current ) : current;//bak 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
            }
            v = rand(StringLength);
            StringArray.push(v);
            //save each time in different place@array
            ExerciseCounterForLoop++;

            GlobalPrint.innerHTML = ExerciseCounterForLoop+' exercise.<br>Memorise this:<br>'+v+'<br>Press Go when done.'
    //        alert(ExerciseCounterForLoop+" exercise.\nMemorise this: <  "+v+"  >\nPress 'OK' when done.");
        }
        GoButton.addEventListener("click", recursive);
    }

    //lets do some math
    while (MathExercisesDone < MathExerciseCount) {
        //here
        var number1 = Math.floor(Math.random(0,1) * 1000);
        var number2 = Math.floor(Math.random(0,1) * 1000);
        var number3 = Math.floor(Math.random(0,1) * 10);
        var number4 = Math.floor(Math.random(0,1) * 10);
        var OperatorListForHuman = new Array(" + ", " - ", " x ");
        var Result;
        var UserInputMath;
        var Randomoperator = Math.floor(Math.random(0,1) * 3);//results 0,1,2
        if (Randomoperator == 0) {
            Result = number1 + number2;
            GlobalPrint.innerHTML = number1+OperatorListForHuman[Randomoperator]+number2;
            GlobalUserInput = document.getElementById("UserInputGlobal");
            UserInputMath = parseInt(GlobalUserInput);
        } else if (Randomoperator == 1) {
            Result = number1 - number2;
            GlobalPrint.innerHTML = number1+OperatorListForHuman[Randomoperator]+number2;
            GlobalUserInput = document.getElementById("UserInputGlobal");
            UserInputMath = parseInt(GlobalUserInput);
        } else {
            Result = number3 * number4;
            GlobalPrint.innerHTML = number1+OperatorListForHuman[Randomoperator]+number2;
            GlobalUserInput = document.getElementById("UserInputGlobal");
            UserInputMath = parseInt(GlobalUserInput);
        }

        if (UserInputMath == Result) {
            GlobalPrint.innerHTML = 'Correct!';
            NumberOfCorrectMathExercises++;
        } else {
            GlobalPrint.innerHTML = 'Incorrect!<br>The Correct result is '+Result;
        }
        MathExercisesDone++;
    }
    //finished math, now continue


    var ExerciseToAsk = 0; //has to be outside for loop
    var StringArrayLength = StringArray.length;
    for (var i = 0; i < StringArrayLength; i++) {//or .forEach //before was .every
        var ExerciseToAskUser = ExerciseToAsk + 1;
        GlobalPrint.innerHTML = 'Input the '+ExerciseToAskUser+' string you memorised:';
        var UserInput = document.getElementById("UserInputGlobal");
        var TheNecessaryItemFromArray = StringArray[ExerciseToAsk];
        ExerciseToAsk++;

        if (UserInput == TheNecessaryItemFromArray) {
            GlobalPrint.innerHTML = 'Correct';
            NumberOfCorrectMemoExercises++;
        } else {
            GlobalPrint.innerHTML = 'Wrong! The right string was   '+TheNecessaryItemFromArray+'  !';
        }
    }
    var TotalExerciseCount = ExerciseCount + MathExerciseCount;

    GlobalPrint.innerHTML = 'Thank for playing!!<br>I hope you are more intelligent now!:)'
    var TotalScore = (NumberOfCorrectMemoExercises * StringLength) + NumberOfCorrectMathExercises;
}

//document.write('Total exercise count: '+TotalExerciseCount+'<br>Total math exercise count: '+MathExerciseCount+'<br>Total string memorise count: '+ExerciseCount+'<br>Length of memorised strings: '+StringLength+'<br>Number of correct memorize exercises: '+NumberOfCorrectMemoExercises+'<br>Number of correct math exercises: '+NumberOfCorrectMathExercises+'<br><br>Total score: '+TotalScore);