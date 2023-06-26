const loginForm = document.getElementById("login-form");
const signUpLink = document.getElementById("signup-link");
const signUpForm = document.getElementById("signup-form");
const accountNotFoundMsg = document.getElementById("account-not-found");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordCheckbox = document.getElementById("confirm-checkbox");

// Fungsi untuk menampilkan form sign up
function showSignUpForm() {
  loginForm.style.display = "none";
  signUpLink.style.display = "none";
  signUpForm.style.display = "block";
  accountNotFoundMsg.style.display = "none";
}

// Fungsi untuk validasi konfirmasi password
function validateConfirmPassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Konfirmasi password tidak sesuai");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
}

// Mengatur event listener untuk form login
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Tambahkan logika untuk proses login
});

// Mengatur event listener untuk form sign up
signUpForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Tambahkan logika untuk proses sign up
});

// Mengatur event listener untuk konfirmasi password
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
confirmPasswordCheckbox.addEventListener("change", validateConfirmPassword);

function getEvents() {
  fetch("https://api.predicthq.com/v1/events/?country=ID&category=concerts&local_rank.gt=27&relevance=rank&sort=rank", {
    "headers": {
      "accept": "application/json",
      "authorization": "Bearer mtIN__OWoD7KMSU2n7X3wD-8b5XSBIx1P-TwC0Hv"
    },
    "method": "GET"
  })
  .then(response => response.json())
  .then(data => console.log(data));
}