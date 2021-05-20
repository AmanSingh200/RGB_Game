var numSquares=6;
var easybutton=document.getElementById("easy");
var mediumbutton=document.getElementById("medium");
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.getElementById("colorpicker");
var message=document.querySelector("#message");
colordisplay.textContent=pickedcolor;
var resetButton=document.querySelector("#reset");
var h1=document.querySelector("h1");

easybutton.addEventListener("click",function(){
    numSquares=3;
    colors=generateRandomColors(numSquares);
    mediumbutton.classList.remove("selected");
    easybutton.classList.add("selected");
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});
mediumbutton.addEventListener("click",function(){
    numSquares=6;
    colors=generateRandomColors(numSquares);
    mediumbutton.classList.add("selected");
    easybutton.classList.remove("selected");
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});
resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numSquares);
    pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;
    this.textContent="New Game";
    message.textContent=" ";
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";

});
for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        var clickcolor=(this.style.backgroundColor);
        console.log(clickcolor,pickedcolor);
        if (clickcolor===pickedcolor)
        {
            message.textContent="Correct";
            resetButton.textContent="Play Again?";
            changeColor(clickcolor);
            h1.style.background=clickcolor;
        }
        else {
            this.style.backgroundColor="#232323";
            message.textContent="Try Again";
        }

    });
}
function changeColor(color){
    for (var i=0;i<squares.length;i++) {
        //when the asnwer is correct chage color of all squares to the correct one
        squares[i].style.backgroundColor=color;
    }   

}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[]
    for (var i=0;i<num;i++){
        //get random color and push that into the array
        arr.push(randomColor());

    }
    return arr;
}


function randomColor(){
   var r= Math.floor(Math.random()*256);

   var g= Math.floor(Math.random()*256);
   
   var b= Math.floor(Math.random()*256);
   return "rgb(" + r + ", " + g + ", " + b +")";
}