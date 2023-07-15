let form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm() {
    
    let name = document.querySelector("#name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let message = document.getElementById("message").value
    // if statement for 
    if(name == "" || email == "" || phone == "")  {
        let error = document.createElement("p").textContent = "* Field is required";
        document.getElementById("errorname").innerHTML = error;
        document.getElementById("emailErr").innerHTML = error;
        document.getElementById("phoneERR").innerHTML = error;
        document.getElementById("messageErr").innerHTML = error;
        event.preventDefault()
       
        

       


    
}

}
