let firstName = document.getElementById("fname")
let fnameError = document.getElementById("errorfname")

let lastName = document.getElementById("lname")
let lnameError = document.getElementById("errorlname")

let email = document.getElementById("emailname")
let emailnameError = document.getElementById("errorEmail")
let emailregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let passwordName = document.getElementById("passwordName")
let errorPasseord = document.getElementById("errorPass")
let upperCase = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


let RepasswordName = document.getElementById("repasswordName")
let RerrorPasseord = document.getElementById("rerrorPass")

let pnum = document.getElementById("pnum")
let errorpnum = document.getElementById("errorpnum")








function sub() {
    if (firstName.value == "") {
        fnameError.innerHTML = "Please enter your First Name"
        firstName.style.border = " 2px solid red"
        firstName.focus()
        return false
    } else if (lastName.value == "") {
        lnameError.innerHTML = "Please enter your First Name"
        lastName.style.border = " 2px solid red"
        lastName.focus()
        return false
    } else if (email.value == "") {
        emailnameError.innerHTML = "Please enter your Valid Email Address"
        email.style.border = " 2px solid red"
        email.focus()
        return false
    } else if (!emailregex.test(email.value)) {
        emailnameError.innerHTML = "This is not a valid email"
        email.style.border = " 2px solid red"
        email.focus()
        return false
    } else if (passwordName.value == "") {
        errorPasseord.innerHTML = "Please Choose a Password"
        passwordName.style.border = " 2px solid red"
        passwordName.focus()
        return false
    } else if (passwordName.value.length < 8) {
        errorPasseord.innerHTML = "Use Minnimum 8 Character."
        passwordName.style.border = " 2px solid red"
        passwordName.focus()
        return false
    } else if (passwordName.value.length > 15) {
        errorPasseord.innerHTML = "Can't Use More Than 15 Characters."
        passwordName.style.border = " 2px solid red"
        passwordName.focus()
        return false
    } else if (!upperCase.test(passwordName.value)) {
        errorPasseord.innerHTML = "Make a Strong Password"
        passwordName.style.border = " 2px solid red"
        passwordName.focus()
        return false
    } else if (RepasswordName.value == "") {
        RerrorPasseord.innerHTML = "Re enter your password"
        RepasswordName.style.border = " 2px solid red"
        RepasswordName.focus()
        return false
    } else if (RepasswordName.value != passwordName.value) {
        RerrorPasseord.innerHTML = "Enter Same Pssword"
        RepasswordName.style.border = " 2px solid red"
        RepasswordName.focus()
        return false
    }
    else if (pnum.value == "") {
        errorpnum.innerHTML = "Please enter your Phone Number"
        pnum.style.border = " 2px solid red"
        pnum.focus()
        return false
    }



}


function Errorfmsgremove(){
    if(firstName .value != ""){
        fnameError.innerHTML=""
        firstName.style.border = "none"
      
        return false
    }
   
}


firstName.addEventListener("blur",Errorfmsgremove)

function Errorlmsgremove(){
    if(lastName.value != ""){
        lnameError.innerHTML=""
        lastName.style.border = "none"
      
        return false
    }
   
}


lastName.addEventListener("blur",Errorlmsgremove)

function showpass() {
    let showdash = document.getElementById("showdash")
    showdash.classList.add("line")

    if (passwordName.type == "password") {
        passwordName.type = "text"
        return false

    } else {
        passwordName.type = "password"
        let showdash = document.getElementById("showdash")
        showdash.classList.remove("line")
    }
}

function shopass() {
    let showPas = document.getElementById("showPas")
    showPas.classList.add("line")


    if (RepasswordName.type == "password") {
        RepasswordName.type = "text"
        return false

    } else {
        RepasswordName.type = "password"
        let showPas = document.getElementById("showPas")
        showPas.classList.remove("line")
    }
}







