function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var error = document.getElementById("error");




    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    



    if (username == "" || email == "" || password == "" || confirm_password == "") {
      error.innerHTML = "Please fill out all the fields!";
    } 
    else if(!emailRegex.test(email)){
      error.innerHTML = "Invalid email format";
    }
    else if(!passwordRegex.test(password)){
      error.innerHTML = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
    else if(password !== confirm_password){
      error.innerHTML = "Password does not match";
    }
    else {
      error.innerHTML = "Form submitted successfully!";
    }
  }