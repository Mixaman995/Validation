let inputs = document.querySelectorAll("input")
let approveButton = document.querySelector("button")
let regstrationDiv = document.querySelector(".registration")
let firstPage = document.querySelector(".welcome")
let errors = document.querySelectorAll(".fields p")

inputs.forEach(input => {

input.addEventListener("change", function() {

let value = this.value
let errorText = this.nextElementSibling

if (value.length < 5) {

errorText.innerHTML = "Polje mora imati najmanje 5 karaktera"

} else {

errorText.innerHTML = ""

if(this.classList.contains("name")) {

let nameText = value.trim()
nameText = nameText.split(" ")

if (nameText.length < 2) {

errorText.innerHTML = "Morate uneti puno ime i prezime"
}

}

if(this.classList.contains("username")) {

    let regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if(!regex.test(value)) {

        errorText.innerHTML = "Korisničko ime mora sadržati bar jedno slovo i bar jedan broj"

    }

}

if(this.classList.contains("email")) {

let regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;


if(!regex.test(value)) {

    errorText.innerHTML = "Email adresa nije validna"

}

}

if(this.classList.contains("number")) {

if (value.length < 6) {

errorText.innerHTML = "Broj mora sadržati najmanje 6 cifara"

}

}

if(this.classList.contains("password")) {

if(value.length < 9) {

errorText.innerHTML = "Lozinka mora sadržati najmanje 9 karaktera"

}
else {

    let regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if(!regex.test(value)) {

        errorText.innerHTML = "Lozinka mora sadržati bar jedno slovo i bar jedan broj"
    }
}

}

if(this.classList.contains("passwordrepeat")) {

let password = document.querySelector(".password")

if(value !== password.value) {

errorText.innerHTML = "Lozinke se ne poklapaju"

}
}
}
})
})


approveButton.addEventListener("click", function() {

    let error = this.previousElementSibling

    /*const logingToFirstPage = a => {

        if(inputs[a].value.length > 1) {

           if(errors[a].innerHTML.length < 1) {

            this.style.display = "none"
            regstrationDiv.style.display = "none"
            firstPage.style.display = "block"
            error.innerHTML = ""             

           } else {

            error.innerHTML = "Morate ispravno popuniti sva polja"

           }

        } else {

         error.innerHTML = "Morate ispravno popuniti sva polja"

        }
       
    }*/

    if(inputs[0].value.length > 1 && inputs[1].value.length > 1 && inputs[2].value.length > 1 && inputs[3].value.length > 1 && inputs[4].value.length > 1 && inputs[5].value.length > 1) {
   

        if(errors[0].innerHTML.length < 1 && errors[1].innerHTML.length < 1 && errors[2].innerHTML.length < 1 && errors[3].innerHTML.length < 1 && errors[4].innerHTML.length < 1 && errors[5].innerHTML.length < 1) 
        {

            this.style.display = "none"
            regstrationDiv.style.display = "none"
            firstPage.style.display = "block"
            error.innerHTML = ""             

           } else {

            error.innerHTML = "Morate ispravno popuniti sva polja"

           }
    }

    else {

        error.innerHTML = "Morate ispravno popuniti sva polja"

    }

    /*logingToFirstPage(0)
    logingToFirstPage(1)
    logingToFirstPage(2)
    logingToFirstPage(3)
    logingToFirstPage(4)
    logingToFirstPage(5)*/

})