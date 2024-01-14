function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Reset error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
  
    // Validate username
    if (username.length < 3) {
      document.getElementById("usernameError").innerHTML = "Username must be at least 3 characters";
      return;
    }
  
    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email address";
      return;
    }
  
    // Validate password
    if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
      return;
    }
  
    // If all validations pass, you can proceed with the registration logic
    alert("Registration successful!");
  }
  
  function clearForm() {
    document.getElementById("registrationForm").reset();
    // Reset error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
  }
  