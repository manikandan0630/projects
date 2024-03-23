let out=document.getElementById("out");
let buttons=document.querySelectorAll(" button");

buttons.forEach(button=>{
   
    button.addEventListener("click",()=>{
        console.log(button)
     //   console.log("test")
        const buttonText=button.textContent;
        switch(buttonText){
            case 'CL':
                out.value='';
                break;
            case 'DEl':
                out.value=out.value.slice(0,-1)
                break;
            case "=":
                try{
                    
                   out.value=eval(out.value)
                   
                }
                catch(erro){
                    console.log(erro)
                }
                break;
            default:
                out.value+=buttonText;
        }
    })
   
})


