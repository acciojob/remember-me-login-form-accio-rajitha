//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
      const loginForm = document.getElementById('loginForm');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const rememberCheckbox = document.getElementById('checkbox');

      // Check for existing user details in localStorage
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (storedUsername && storedPassword) {
        usernameInput.value = storedUsername;
        passwordInput.value = storedPassword;
        rememberCheckbox.checked = true;
      }

      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberCheckbox.checked) {
          // Save username and password in localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Remove stored username and password from localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Display alert with logged in message
        alert("Logged in as " + username);

        // Show "Login as existing user" button if there are saved details
        if (storedUsername && storedPassword) {
          const existingButton = document.createElement('button');
          existingButton.id = 'existing';
          existingButton.textContent = 'Login as existing user';
          existingButton.addEventListener('click', function() {
            alert("Logged in as " + storedUsername);
          });
          loginForm.appendChild(existingButton);
        }
      });
    });