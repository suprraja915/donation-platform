document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'main.html'; // Redirect to the main page after login
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('signup-link').addEventListener('click', function() {
    alert('Sign-up functionality not implemented. Proceed to login.');
});

document.getElementById('donate-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const cause = document.getElementById('cause').value;

    if (amount > 0) {
        alert('Proceeding to payment gateway for your donation!');
        window.location.href = 'https://www.paymentgateway.com'; // Mock payment gateway
    } else {
        alert('Please enter a valid donation amount');
    }
});
