document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Clear previous errors and success messages
    clearMessages();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form
    let isValid = true;

    // Username validation
    if (username.length < 5) {
        document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Show success message if valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Your input meets criteria.Form submitted successfully!';
        // You can also perform further actions here, like sending data to a server.
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});

function clearMessages() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';
}
