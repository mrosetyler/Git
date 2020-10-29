let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");


//run through a loop
//add an event listener

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        alert("you clicked on" + e.target.innerText);
        changingText(e.target.innerText);
        }
    });
}

function changingText(textToChange){
    //only works if you want all buttons to do a similar task
   changeMe.innerText = textToChange;
   //reset our css here
   changeMe.innerText.classList = "";

   switch(textToChange){
       case"Primary":
       changeMe.classList.add("blue");
       break;
       case "Secondary":
        changeMe.classList.add("gray");
        break;
        case "Success":
        changeMe.classList.add("yellow");
        case"Danger":
        changeMe.classList.add("teal");
        break;
        changeMe.classList.add("red")
   }
}
