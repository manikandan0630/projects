let inpu=document.getElementById("inp")
let list=document.getElementById("list")
let arr=[]

document.getElementById("submit").addEventListener("click",()=>{
    arr.push(inpu.value)

    if(inpu.value===''){
        alert("please enter something")
    }
    else{
       
        for(let i=0;i<arr.length;i++){
            let li=document.createElement("li")
            li.innerHTML=arr[i];
            list.appendChild(li)
        }
       
       }
    
    inpu.value=''
    
})


