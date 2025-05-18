  // Dark mode toggle
    const toggleBtn = document.getElementById('toggleDarkMode');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Change button text dynamically
      if(document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
      } else {
        toggleBtn.textContent = 'Dark Mode';
      }
    });

    // Dummy credentials
    const dummyEmail = "user@mindbloom.com";
    const dummyPassword = "password123";

    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors & success
      emailError.textContent = '';
      passwordError.textContent = '';
      successMessage.classList.remove('show');
      successMessage.textContent = '';

      let hasError = false;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Basic email validation
      if (email === "") {
        emailError.textContent = "Email is required";
        hasError = true;
      } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter a valid email";
        hasError = true;
      }

      // Password validation
      if (password === "") {
        passwordError.textContent = "Password is required";
        hasError = true;
      } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        hasError = true;
      }

      if (!hasError) {
        if (email === dummyEmail && password === dummyPassword) {
          // Show success message with animation
          successMessage.textContent = "Login successful! Welcome to Mindbloom 🌿";
          successMessage.classList.add('show');

          // Optionally, disable form inputs and button
          emailInput.disabled = true;
          passwordInput.disabled = true;
          form.querySelector('button[type="submit"]').disabled = true;

          // You can redirect after delay if needed:
          // setTimeout(() => window.location.href = "index.html", 2000);
        } else {
          successMessage.textContent = '';
          alert("Invalid email or password. Please try again.");
        }
      }
    });