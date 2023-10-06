let count = 0;

document.querySelector(".button").addEventListener("click",() =>{
    const lable =  document.querySelector(".label")
    lable.innerHTML = count;
    count++;
    if (count>18){
        lable.style.fontSize = count + "px";
    }
});

