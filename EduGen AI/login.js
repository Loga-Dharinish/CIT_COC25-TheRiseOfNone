const loginBtn = document.getElementById('login-tab');
const registerBtn = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});
registerBtn.addEventListener('click', () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Example submit handlers
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  alert("Logging in user: " + loginForm['login-email'].value);
  // Add your authentication logic here
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  alert("Registering user: " + registerForm['register-email'].value);
  // Add your registration logic here
});
