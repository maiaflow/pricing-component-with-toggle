const monthly = document.querySelector("#monthly");
const annually = document.querySelector("#annually");
const checkbox = document.querySelector("input[type='checkbox']");
const basic = document.querySelector("#basic p");
const professional = document.querySelector("#professional p");
const master = document.querySelector("#master p");
monthly.addEventListener("click",()=>{
    checkbox.checked=true;
    basic.innerHTML="<sub>$</sub>19.99";
    professional.innerHTML="<sub>$</sub>24.99";
    master.innerHTML="<sub>$</sub>39.99";
});
annually.addEventListener("click",()=>{
    checkbox.checked=false;
    basic.innerHTML="<sub>$</sub>199.99";
    professional.innerHTML="<sub>$</sub>249.99";
    master.innerHTML="<sub>$</sub>399.99";

});
checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        basic.innerHTML="<sub>$</sub>19.99";
        professional.innerHTML="<sub>$</sub>24.99";
        master.innerHTML="<sub>$</sub>39.99";
    }
    else {
        basic.innerHTML="<sub>$</sub>199.99";
        professional.innerHTML="<sub>$</sub>249.99";
        master.innerHTML="<sub>$</sub>399.99";
    }
})