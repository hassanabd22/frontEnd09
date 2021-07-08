const Io = document.querySelector(".io");
const err = document.querySelector(".err")
;

Io.addEventListener("click", function (){
    if (err.classList.contains("active-err")){
        err.classList.remove("active-err");
    }
    else {
        err.classList.add("active-err");
    }
})


const erro = document.querySelector(".erro")
;

Io.addEventListener("click", function (){
    if (erro.classList.contains("active-err")){
        erro.classList.remove("active-err");
    }
    else {
        erro.classList.add("active-err");
    }
})


