    

    let numberofbuttons=document.getElementsByClassName("drum").length;
    console.log(numberofbuttons);
    document.addEventListener("keydown", function(event){
       makeSounds(event.key)
       buttonAnimation(event.key);});

       //function buttonAnimation(currentKey){
        //document.querySelector("."+ currentKey).classList.add("pressed");
    
   // }
   
// THIS IS TO DETECT A BUTTON(MOUSE CLICK)
    for(i=0;i<=numberofbuttons;i++)
    {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttoninnerHtml=this.innerHTML;
        makeSounds(buttoninnerHtml);
        buttonAnimation(buttoninnerHtml)

    });}


    // THIS IS TO DETECT A KEYBOARD PRESS
   //document.addEventListener("keydown", function(event){
     //  makeSounds(event.key);});
   
     
   
     

   function makeSounds(key){
    switch(key){
        case "w":
            var tom1 = new Audio("Sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("Sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("Sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("Sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("Sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("Sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("Sounds/kick-bass.mp3");
            kick.play();
            break;

        default: key;


    }
}
 
function buttonAnimation(currentKey){
  document.querySelector("."+ currentKey).classList.add("pressed");
  setInterval(function(){document.querySelector("."+ currentKey).classList.remove("pressed")},100)

}

