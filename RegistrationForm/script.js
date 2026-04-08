// ================================================================
//  Registration Form – Client-Side Validation
//  File: script.js
// ================================================================

// ── DOM References ──────────────────────────────────────────────
const form              = document.getElementById('registrationForm');
const fullNameInput     = document.getElementById('fullName');
const usernameInput     = document.getElementById('username');
const roleSelect        = document.getElementById('role');
const courseInput       = document.getElementById('course');
const emailInput        = document.getElementById('email');
const emailHint         = document.getElementById('emailHint');
const ageInput          = document.getElementById('age');
const genderSelect      = document.getElementById('gender');
const passwordInput     = document.getElementById('password');
const confirmInput      = document.getElementById('confirmPassword');
const termsCheckbox     = document.getElementById('terms');

// ── Helper: show or clear field error ───────────────────────────

/**
 * Marks a field as INVALID: red border + error message.
 * @param {HTMLElement} field  – the input/select element
 * @param {string}      msgId  – id of the <span> that holds the error
 * @param {string}      msg    – the error text to display
 */
function setError(field, msgId, msg) {
  field.classList.remove('valid');
  field.classList.add('invalid');
  document.getElementById(msgId).textContent = msg;
}

/**
 * Marks a field as VALID: green border, clears error message.
 */
function setValid(field, msgId) {
  field.classList.remove('invalid');
  field.classList.add('valid');
  document.getElementById(msgId).textContent = '';
}

/**
 * Clears validation styling without marking valid (used on reset).
 */
function clearState(field, msgId) {
  field.classList.remove('valid', 'invalid');
  document.getElementById(msgId).textContent = '';
}

// ── Email hint: updates based on selected role ───────────────────
roleSelect.addEventListener('change', function () {
  const role = this.value;
  if (role === 'Student') {
    emailHint.textContent = 'Students must use an email ending with @student.edu.np';
  } else if (role === 'Teacher') {
    emailHint.textContent = 'Teachers must use an email ending with @tutor.edu.np';
  } else {
    emailHint.textContent = 'Select a role first to see email requirement.';
  }
  // Re-validate email live if already typed
  if (emailInput.value.trim()) validateEmail();
});

// ── Password visibility toggle ───────────────────────────────────
document.querySelectorAll('.toggle-pw').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const targetId = this.dataset.target;
    const input    = document.getElementById(targetId);
    if (input.type === 'password') {
      input.type   = 'text';
      this.textContent = '🙈';
    } else {
      input.type   = 'password';
      this.textContent = '👁';
    }
  });
});

// ── Individual Validators ────────────────────────────────────────

function validateFullName() {
  const val = fullNameInput.value.trim();
  if (val === '') {
    setError(fullNameInput, 'fullNameError', 'Full name is required.');
    return false;
  }
  if (val.length < 3) {
    setError(fullNameInput, 'fullNameError', 'Full name must be at least 3 characters.');
    return false;
  }
  // Only letters and spaces
  if (!/^[a-zA-Z\s]+$/.test(val)) {
    setError(fullNameInput, 'fullNameError', 'Full name must contain only letters and spaces.');
    return false;
  }
  setValid(fullNameInput, 'fullNameError');
  return true;
}

function validateUsername() {
  const val = usernameInput.value.trim();
  if (val === '') {
    setError(usernameInput, 'usernameError', 'Username is required.');
    return false;
  }
  if (val.length < 3) {
    setError(usernameInput, 'usernameError', 'Username must be at least 3 characters.');
    return false;
  }
  // Alphanumeric + underscore only
  if (!/^[a-zA-Z0-9_]+$/.test(val)) {
    setError(usernameInput, 'usernameError', 'Only letters, numbers, and underscores allowed.');
    return false;
  }
  setValid(usernameInput, 'usernameError');
  return true;
}

function validateRole() {
  if (roleSelect.value === '') {
    setError(roleSelect, 'roleError', 'Please select a role.');
    return false;
  }
  setValid(roleSelect, 'roleError');
  return true;
}

function validateCourse() {
  const val = courseInput.value.trim();
  if (val === '') {
    setError(courseInput, 'courseError', 'Course is required.');
    return false;
  }
  setValid(courseInput, 'courseError');
  return true;
}

function validateEmail() {
  const val  = emailInput.value.trim();
  const role = roleSelect.value;

  if (val === '') {
    setError(emailInput, 'emailError', 'Email is required.');
    return false;
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    setError(emailInput, 'emailError', 'Please enter a valid email address.');
    return false;
  }

  // Role-specific domain check
  if (role === 'Student' && !val.endsWith('@student.edu.np')) {
    setError(emailInput, 'emailError', 'Students must use an email ending with @student.edu.np');
    return false;
  }

  if (role === 'Teacher' && !val.endsWith('@tutor.edu.np')) {
    setError(emailInput, 'emailError', 'Teachers must use an email ending with @tutor.edu.np');
    return false;
  }

  if (role === '' && (val.endsWith('@student.edu.np') || val.endsWith('@tutor.edu.np'))) {
    // Email looks fine but role not chosen yet
    setError(emailInput, 'emailError', 'Please select your role first.');
    return false;
  }

  if (role === '' ) {
    setError(emailInput, 'emailError', 'Please select your role first to validate your email.');
    return false;
  }

  setValid(emailInput, 'emailError');
  return true;
}

function validateAge() {
  const val = parseInt(ageInput.value, 10);
  if (ageInput.value.trim() === '' || isNaN(val)) {
    setError(ageInput, 'ageError', 'Age is required.');
    return false;
  }
  if (val < 5 || val > 120) {
    setError(ageInput, 'ageError', 'Age must be between 5 and 120.');
    return false;
  }
  setValid(ageInput, 'ageError');
  return true;
}

function validateGender() {
  if (genderSelect.value === '') {
    setError(genderSelect, 'genderError', 'Please select a gender.');
    return false;
  }
  setValid(genderSelect, 'genderError');
  return true;
}

function validatePassword() {
  const val = passwordInput.value;
  if (val === '') {
    setError(passwordInput, 'passwordError', 'Password is required.');
    return false;
  }
  if (val.length < 8) {
    setError(passwordInput, 'passwordError', 'Password must be at least 8 characters long.');
    return false;
  }
  // Must have at least one letter and one number
  if (!/[a-zA-Z]/.test(val) || !/[0-9]/.test(val)) {
    setError(passwordInput, 'passwordError', 'Password must include at least one letter and one number.');
    return false;
  }
  setValid(passwordInput, 'passwordError');
  return true;
}

function validateConfirmPassword() {
  const val = confirmInput.value;
  if (val === '') {
    setError(confirmInput, 'confirmPasswordError', 'Please confirm your password.');
    return false;
  }
  if (val !== passwordInput.value) {
    setError(confirmInput, 'confirmPasswordError', 'Passwords do not match.');
    return false;
  }
  setValid(confirmInput, 'confirmPasswordError');
  return true;
}

function validateTerms() {
  const checkmark = document.querySelector('.checkmark');
  if (!termsCheckbox.checked) {
    checkmark.classList.add('invalid-check');
    document.getElementById('termsError').textContent = 'You must accept the Terms & Conditions.';
    return false;
  }
  checkmark.classList.remove('invalid-check');
  document.getElementById('termsError').textContent = '';
  return true;
}

// ── Live validation (blur events for good UX) ───────────────────
fullNameInput.addEventListener('blur',    validateFullName);
usernameInput.addEventListener('blur',    validateUsername);
roleSelect.addEventListener('blur',       validateRole);
courseInput.addEventListener('blur',      validateCourse);
emailInput.addEventListener('blur',       validateEmail);
ageInput.addEventListener('blur',         validateAge);
genderSelect.addEventListener('blur',     validateGender);
passwordInput.addEventListener('blur',    validatePassword);
confirmInput.addEventListener('blur',     validateConfirmPassword);

// Re-validate confirm password whenever password changes
passwordInput.addEventListener('input', function () {
  if (confirmInput.value !== '') validateConfirmPassword();
});

// ── Form Submit ──────────────────────────────────────────────────
form.addEventListener('submit', function (event) {
  // Always prevent default first to stop page reload
  event.preventDefault();

  // Run ALL validators and collect results
  const results = [
    validateFullName(),
    validateUsername(),
    validateRole(),
    validateCourse(),
    validateEmail(),
    validateAge(),
    validateGender(),
    validatePassword(),
    validateConfirmPassword(),
    validateTerms()
  ];

  const allValid = results.every(function (r) { return r === true; });

  if (allValid) {
    // ✅ All fields passed – show success message
    alert('🎉 Registration successful! Welcome to edu.np.');
    form.reset();
    // Clear all visual states after reset
    document.querySelectorAll('input, select').forEach(function (el) {
      el.classList.remove('valid', 'invalid');
    });
    document.querySelectorAll('.error-msg').forEach(function (el) {
      el.textContent = '';
    });
    document.querySelector('.checkmark').classList.remove('invalid-check');
    emailHint.textContent = 'Select a role first to see email requirement.';
  } else {
    // ❌ At least one field failed – scroll to first invalid field
    const firstInvalid = form.querySelector('.invalid');
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalid.focus();
    }
  }
});