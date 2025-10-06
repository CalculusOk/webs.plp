// ===== Form Validation & Interactivity =====

// Validate form on Contact page
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    // Validate input fields
    if (name === "" || email === "" || message === "") {
      msg.style.color = "red";
      msg.textContent = "All fields are required.";
      return;
    }

    if (!validateEmail(email)) {
      msg.style.color = "red";
      msg.textContent = "Please enter a valid email address.";
      return;
    }

    // If everything is valid
    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";
    form.reset();
  });
}

// Function demonstrating parameters and return value
function validateEmail(email) {
  // Simple regex for email pattern
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return regex.test(email);
}
