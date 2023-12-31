let inputElem=document.getElementById("input")
let paraElem=document.getElementById("para")
let counter=10;


 let uniqueId=setInterval(() => {
    counter=counter-1
    paraElem.textContent=counter

    if(counter===0){
        paraElem.textContent="****BOOM***"
        paraElem.style.color="red";
        clearInterval(uniqueId)
        
     }

 }, 1000);
 

 inputElem.addEventListener("keydown",(event)=>{
    let inputValue=inputElem.value
    if(inputValue==="rachit"&& event.key==="Enter"&& counter!==0){
      paraElem.textContent="You did it...yeee!"
      clearInterval(uniqueId)
    }
 })

