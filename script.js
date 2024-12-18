// Simulated user database stored in localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Show Login Form Modal
function showLoginForm() {
    document.body.classList.add("modal-open");
    document.getElementById("login-modal").style.display = "block";
}

// Close Login Form Modal
function closeLoginForm() {
    document.body.classList.remove("modal-open");
    document.getElementById("login-modal").style.display = "none";
}

// Login Function
function login() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    // Debugging: Log inputs
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);

    // Find the user based on email (case-insensitive) and password
    const user = users.find(user => 
        user.email.toLowerCase() === email.toLowerCase() && user.password === password
    );

    if (user) {
        alert("Login successful! Welcome, " + email);
        window.location.href = "#auction"; // Redirect after login
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Simulated user registration for testing purposes
function showSignupForm() {
    // Simulate creating a new user
    const newUser = {
        email: "test@example.com",
        password: "password123"
    };

    // Store the new user in localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created! You can now log in.");
}
