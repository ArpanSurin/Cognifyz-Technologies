document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const errorDiv = document.getElementById("error");
  
    let errorMessages = [];
  
    if (name === "") {
      errorMessages.push("Name is required.");
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      errorMessages.push("Phone number must be 10 digits.");
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessages.push("Please enter a valid email address.");
    }
  
    if (password.length < 6) {
      errorMessages.push("Password must be at least 6 characters long.");
    }
  
    if (errorMessages.length > 0) {
      errorDiv.innerHTML = errorMessages.join("<br>");
      errorDiv.style.color = "red";
    } else {
      errorDiv.innerHTML = "Form submitted successfully!";
      errorDiv.style.color = "green";
  
    }
  });
  