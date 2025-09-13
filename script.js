let inp = document.querySelector("#inp");
let input = document.querySelector("input");

inp.addEventListener("click",function(dets){
    input.click()
})
input.addEventListener("change", function(detss){

    if(detss.target.files.length>0){
        inp.textContent=(detss.target.files[0].name)
    }
    else{
        inp.textContent= "upload here"
    }
    
})