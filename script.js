$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let valid = true;

        // Email validation
        const email = $('#email').val();
        if (email === '') {
            $('#email').addClass('is-invalid');
            valid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Password validation
        const password = $('#password').val();
        if (password === '') {
            $('#password').addClass('is-invalid');
            valid = false;
        } else {
            $('#password').removeClass('is-invalid');
        }

        if (valid) {
            alert('Login successful!');
            // You can add more actions here
        }
    });
});
