//Dynamic Element
var DynamicColorContainerElement = document.getElementById("DynamicColorContainer");



//Blue Button Element
var BlueButtonElement = document.getElementById("BlueButton");

BlueButtonElement.addEventListener("click", function(){
    DynamicColorContainerElement.style.backgroundColor= "blue";
});

//Green Button Element
var GreenButtonElement = document.getElementById("GreenButton");

GreenButtonElement.addEventListener("click", function(){
    DynamicColorContainerElement.style.backgroundColor= "green";
});


//Red Button Element
var RedButtonElement = document.getElementById("RedButton");

RedButtonElement.addEventListener("click", function(){
    DynamicColorContainerElement.style.backgroundColor= "red";
});

//Yellow Button Element
var YellowButtonElement = document.getElementById("YellowButton");

YellowButtonElement.addEventListener("click", function(){
    DynamicColorContainerElement.style.backgroundColor= "yellow";
});


//Reset Element
var ResetButtonElement = document.getElementById("Reset");

ResetButtonElement.addEventListener("click", function(){
    DynamicColorContainerElement.style.backgroundColor= "grey";
});