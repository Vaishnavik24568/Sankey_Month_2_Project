function togglePasswordVisibility(inputId, eyeIconId) {
    var passwordInput = document.getElementById(inputId);
    var eyeIcon = document.querySelector(`.${eyeIconId}`);

    // Toggle the type attribute
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";

    // Toggle the visibility of the icons
    eyeIcon.src = (passwordInput.type === "password")
        ? "./public/iconsbasepreviewcloseone.svg" // Replace with the path to your closed eye icon
        : "./public/icon_open_eye.png"; // Replace with the path to your open eye icon
}

// For 'password' field
document.getElementById('passwordInput').addEventListener('input', function () {
    togglePasswordVisibility('passwordInput', 'iconsbasepreview-close-one');
});

// For 'confirm password' field
document.getElementById('confirmPasswordInput').addEventListener('input', function () {
    togglePasswordVisibility('confirmPasswordInput', 'iconsbasepreview-close-one1');
});


function isValidEmail(email) {
    // Simple email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function containsNumbers(input) {
    return /\d/.test(input);
}

// Function to validate the form
function validateForm() {
    // Reset error messages
    document.getElementById('first_name_error').textContent = '';
    document.getElementById('last_name_error').textContent = '';
    document.getElementById('email_error').textContent = '';
    document.getElementById('password_error').textContent = '';
    document.getElementById('checkbox_error').textContent = '';

    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('text1').value;
    var password = document.getElementById('passwordInput').value;
    var confirmPassword = document.getElementById('confirmPasswordInput').value;
    var checkbox = document.getElementById('checkboxId');
    

    // Validate First Name 
    if (firstName.trim() === '') {
        document.getElementById('first_name_error').textContent = 'Fill the First Name';
        return false;
    } else if (containsNumbers(firstName)) {
        document.getElementById('first_name_error').textContent = 'First Name cannot contain numbers';
        return false;
    }

    // Validate Last Name
    if (lastName.trim() === '') {
        document.getElementById('last_name_error').textContent = 'Fill the Last Name';
        return false;
    } else if (containsNumbers(lastName)) {
        document.getElementById('last_name_error').textContent = 'Last Name cannot contain numbers';
        return false;
    }

    // Validate Email
    if (email.trim() === '') {
        document.getElementById('email_error').textContent = 'Fill the Email';
        return false;
    } else if (!isValidEmail(email)) {
        document.getElementById('email_error').textContent = 'Invalid Email format';
        return false;
    }

    // Validate Password
    if (password.trim() === '') {
        document.getElementById('password_error').textContent = 'Fill the Password';
        return false;
    }

    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
        document.getElementById('password_error').textContent = 'Fill the Confirm Password';
        return false;
    }

    // Check if Password and Confirm Password match
    if (password !== confirmPassword) {
        document.getElementById('password_error').textContent = 'Password and Confirm Password do not match';
        return false;
    }

    // Validate Checkbox
    if (!checkbox.checked) {
        document.getElementById('checkbox_error').textContent = 'Please agree to the Terms and Privacy Policies';
        return false;
    }

    // Form is valid - you can submit the form or perform additional actions
    console.log('Form is valid. Submitting...');
    return true;
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function openFacebookLogin() {
    window.location.href = 'templates/facebook-login.html';
}

// Function to open the Apple login page
function openAppleLogin() {
    window.location.href = 'templates/apple-login.html';
}

// Function to open the Google login page
function openGoogleLogin() {
    window.location.href = 'templates/google-login.html';
}

// Adding event listeners to the buttons
document.querySelector('.button2').addEventListener('click', openFacebookLogin);
document.querySelector('.button3').addEventListener('click', openAppleLogin);
document.querySelector('.button4').addEventListener('click', openGoogleLogin);
