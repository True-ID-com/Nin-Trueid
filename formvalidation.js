function openModal() {
                document.getElementById('signupModal').style.display = 'block';
                document.getElementById('signinModal').style.display = 'none';
            }
            function closeModal() {
                document.getElementById('signupModal').style.display = 'none';
            }
            window.onclick = function(event) {
                const signupModal= document.getElementById('signupModal');
                if (event.target === signupModal) {
                    signupModal.style.display = 'none';
                }
            }
            document.getElementById('signupForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent form submission
                // Add your form validation logic here
            });
            document.getElementById('password').addEventListener('focus', function () {
                document.getElementById('passwordHint').style.display = 'block';
            });
            document.getElementById('password').addEventListener('blur', function () {
                document.getElementById('passwordHint').style.display = 'none';
            });
            document.getElementById('password').addEventListener('input', function () {
                const password = this.value;
                const passwordError = document.getElementById('passwordError');
                if (password.length < 8) {
                    passwordError.textContent = 'Password must be at least 8 characters long.';
                } else {
                    passwordError.textContent = '';
                }
            });
            document.getElementById('confirmPassword').addEventListener('input', function () {
                const confirmPassword = this.value;
                const password = document.getElementById('password').value;
                const confirmPasswordError = document.getElementById('confirmPasswordError');
                if (confirmPassword !== password) {
                    confirmPasswordError.textContent = 'Passwords do not match.';
                } else {
                    confirmPasswordError.textContent = '';
                }
            });
            document.getElementById('phone').addEventListener('input', function () {
                const phone = this.value;
                const phoneError = document.getElementById('phoneError');
                const phonePattern = /^[0-9]{10}$/; // Example pattern for a 10-digit phone number
                if (!phonePattern.test(phone)) {
                    phoneError.textContent = 'Invalid phone number.';
                } else {
                    phoneError.textContent = '';
                }
            });
            document.getElementById(submit).addEventListener('click', function () {
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                // Add your form submission logic here
            });
            function openLoginModal() {
            document.getElementById('signinModal').style.display = 'block';
            document.getElementById('signupModal').style.display = 'none';
        }
        function closeLoginModal() {
            document.getElementById('signinModal').style.display ='none'
        }
        window.onclick = function(event) {
                const loginModal= document.getElementById('signupModal');
                if (event.target === loginModal) {
                    loginModal.style.display = 'none';
                }
            }
            document.getElementById('signinForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent form submission
                // Add your form validation logic here
            });
            document.getElementById('password').addEventListener('focus', function () {
                document.getElementById('passwordHint').style.display = 'block';
            });
            document.getElementById('password').addEventListener('blur', function () {
                document.getElementById('passwordHint').style.display = 'none';
            });
            document.getElementById('password').addEventListener('input', function () {
                const password = this.value;
                const passwordError = document.getElementById('passwordError');
                if (password.length < 8) {
                    passwordError.textContent = 'Password must be at least 8 characters long.';
                } else {
                    passwordError.textContent = '';
                }
            });
            document.getElementById('submit').addEventListener('click', function () {
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                // Add your form submission logic here
            });
