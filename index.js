let display = document.getElementById("display");

let buttons = Array.from(document.getElementByclassName('button'));

button.map (buttons =>{
    buttons.addEventListener ('click',(e)=>{
        switch(e.target.innerText){
            case'c':
    display.innerText='';
    break;
    case'<=':
    if (display.innerText){
    display.innerText= display.innerText.slice(0,-1);
        }
    break;
case'=':
display.innerText=eval(display.innerText);
            default:

                display.innerText += e.target.innerText;
 } })
    });

        
