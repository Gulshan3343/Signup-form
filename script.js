const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const submit = document.getElementById('submit');

        function validateUsername() {
            const small = username.nextElementSibling;
            if (username.value.length >= 6 && /^[a-z0-9]+$/i.test(username.value)) {
                small.textContent = 'Username is valid';
                small.className = 'valid';
                return true;
            } else {
                small.textContent = 'Username must be alphanumeric and at least 6 characters long';
                small.className = 'invalid';
                return false;
            }
        }

        function validateEmail() {
            const small = email.nextElementSibling;
            if (/^\S+@\S+\.\S+$/.test(email.value)) {
                small.textContent = 'Email is valid';
                small.className = 'valid';
                return true;
            } else {
                small.textContent = 'Email address must be in a valid format';
                small.className = 'invalid';
                return false;
            }
        }

        function validatePassword() {
            const small = password.nextElementSibling;
            if (password.value.length >= 8) {
                small.textContent = 'Password is valid';
                small.className = 'valid';
                return true;
            } else {
                small.textContent = 'Password must be at least 8 characters long';
                small.className = 'invalid';
                return false;
            }
        }

        function validateForm() {
            if (validateUsername() && validateEmail() && validatePassword()) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        }

        username.addEventListener('input', validateForm);
        email.addEventListener('input', validateForm);
        password.addEventListener('input', validateForm);