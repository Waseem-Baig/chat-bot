document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Load existing users from localStorage or initialize an empty array
  let usersData = JSON.parse(localStorage.getItem("users")) || [];

  // Handle login
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      // Find the user in the array
      const user = usersData.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", email); // Store session info
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  // Handle signup
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      // Check if the email is already registered
      if (usersData.some((user) => user.email === email)) {
        alert("This email is already registered. Please log in.");
      } else {
        // Store user data in the array
        const userData = { name, email, password };
        usersData.push(userData);

        // Update localStorage
        localStorage.setItem("users", JSON.stringify(usersData));

        alert("Signup successful! You can now log in.");
        window.location.href = "login.html";
      }
    });
  }
});
