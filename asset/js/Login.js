
var modalElement = document.querySelector(".modal");
var btnSignUpElement = document.querySelector(".js-btn-SignUp");
var btnSignInElement = document.querySelector(".js-btn-SignIn");
var btnBackElement = document.querySelectorAll(".js-btn-back");
var modalContentElement = document.querySelector(".js-modal__content")
var formSignUpElement = document.querySelector(".js-SignUp");
var formSignInElement = document.querySelector(".js-SignIn");
var switchFormSignUpElement = document.querySelector(".js-form-signUp");
var switchFormSignInElement = document.querySelector(".js-form-signIn");

console.log(switchFormSignInElement);
btnSignUpElement.addEventListener("click",function(){
    modalElement.classList.add("open-auth");
    formSignUpElement.classList.add("open-form");
}
)

btnSignInElement.addEventListener("click",function(){
    modalElement.classList.add("open-auth");
    formSignInElement.classList.add("open-form");
}
)

for(const btn of btnBackElement){
    btn.addEventListener("click",function(){
    modalElement.classList.remove("open-auth");
    formSignUpElement.classList.remove("open-form");
    formSignInElement.classList.remove("open-form");
})
}

modalElement.addEventListener("click",function(){
    modalElement.classList.remove("open-auth");
    formSignUpElement.classList.remove("open-form");
    formSignInElement.classList.remove("open-form");
})

modalContentElement.addEventListener("click",e =>
    e.stopPropagation()
)

switchFormSignUpElement.addEventListener("click",function(){
    formSignInElement.classList.remove("open-form");
    formSignUpElement.classList.add("open-form");
}
)
switchFormSignInElement.addEventListener("click",function(){
    formSignInElement.classList.add("open-form");
    formSignUpElement.classList.remove("open-form");
}
)