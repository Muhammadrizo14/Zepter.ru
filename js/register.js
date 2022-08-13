
let register_on = document.querySelector(".register_on")
let login_on = document.querySelector(".login_on")
let register = document.querySelector(".register")
let login = document.querySelector(".login")


register_on.addEventListener("click", ()=>{
    login.style.display = "none"
    register.style.display = "block"
    register_on.classList.add("active_text")
    login_on.classList.remove("active_text")
    console.log(register_on)
})

login_on.addEventListener("click", ()=>{
    register.style.display = "none"
    login.style.display = "block"
    login_on.classList.add("active_text")
    register_on.classList.remove("active_text")
})
