// In a real-world scenario, you would use more secure methods for password hashing
function hashPassword(password) {
    // Simple hashing for demonstration purposes
    return btoa(password);
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Reset error message
    document.getElementById('loginError').innerText = '';

    // In a real-world scenario, you would check the credentials against a database
    // For demonstration, we'll use a hardcoded username and hashed password
    var hardcodedUsername = 'user';
    var hardcodedPasswordHash = hashPassword('password');

    if (username !== hardcodedUsername || hashPassword(password) !== hardcodedPasswordHash) {
        document.getElementById('loginError').innerText = 'Invalid username or password';
        return;
    }

    // If login is successful, you can redirect to another page or perform further actions
    alert('Login successful!');
    // Add code for redirection or further actions here
}
