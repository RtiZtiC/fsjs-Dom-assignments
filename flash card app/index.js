const textbox = document.getElementById("textbox");
const textbox1 = document.getElementById("textbox1");
const btn=document.getElementById("convert");
const card=document.getElementById("output");

btn.addEventListener("click",function(){
    let text1=textbox.value;
    let text2=textbox1.value;  
    console.log(text1);  
    card.innerHTML="<h1>" + text2 +"</h1>"+"<br>"+"<p>" + text2 +"</p>";
});
