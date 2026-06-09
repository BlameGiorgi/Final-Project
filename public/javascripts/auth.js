const togglePasswordButtons = document.querySelectorAll('.toggle-password-icon');

togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const passwordInput = button.previousElementSibling;
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

        if (type === 'text') {
            button.src = '/images/eye-off.svg';
        } else {
            button.src = '/images/eye.svg';
        }

        passwordInput.setAttribute('type', type);
    })
});

