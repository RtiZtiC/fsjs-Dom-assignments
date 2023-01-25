var colorArray = ["red", "green", "blue"];
var colorPreview = document.getElementById("colorPreview");
var result = document.getElementById("result");

var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
var color2 = colorArray[Math.floor(Math.random() * colorArray.length)];
var mixedColor = color1 + " + " + color2;
colorPreview.innerHTML=mixedColor;
var output_color;


    if((color1=="red") && (color2=="red"))
    {
        output_color="red";
    }
    if((color1=="red") && (color2=="blue"))
    {
        output_color="purple";
    }
    if((color1=="red") && (color2=="green"))
    {
        output_color="yellow";
    }
    if((color1=="green") && (color2=="green"))
    {
        output_color="green";
    }
    if((color1=="green") && (color2=="red"))
    {
        output_color="yellow";
    }
    if((color1=="green") && (color2=="blue"))
    {
        output_color="blue";
    }
    if((color1=="blue") && (color2=="blue"))
    {
        output_color="blue";
    }
    if((color1=="blue") && (color2=="red"))
    {
        output_color="purple";
    }
    if((color1=="green") && (color2=="blue"))
    {
        output_color="blue";
    }

function checkAnswer() {
    var color = document.querySelector('input[name="color"]:checked').value;
    console.log(color);
    if (color == output_color){
        result.innerHTML="Hurrahh!!"
        colorPreview.style.backgroundColor = output_color;
    }
    else{
        result.innerHTML="not the correct answer"
    }
}