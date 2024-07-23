document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessages = '';

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessages += 'All fields are required.<br>';
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages += 'Please enter a valid email address.<br>';
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessages += 'Passwords do not match.<br>';
    }

    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
        document.getElementById('errorMessages').innerHTML = '';
        alert('Form submitted successfully!');
        // You can submit the form here or perform other actions as needed
    }
});

// Set the last updated date
document.getElementById('lastUpdated').innerText = 'Last Updated: ' + new Date().toLocaleString();
