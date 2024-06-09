document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector('button[type="submit"]');
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the button's default action
      login();
    });
  });
  
  function login() {
    var email = document.getElementById("typeEmailX").value;
    var password = document.getElementById("typePasswordX").value;
    var errorMessage = document.getElementById("error-message");
  
    // Dummy email and password for demonstration
    var validEmail = "user@example.com";
    var validPassword = "password";
  
    if (email === validEmail && password === validPassword) {
      alert("Login successful!");
      // Redirect to another page
      window.location.href = "th.html";
    } else {
      errorMessage.textContent = "Invalid email or password. Please try again.";
      errorMessage.style.display = "block"; // Show the error message
    }
  }
  
