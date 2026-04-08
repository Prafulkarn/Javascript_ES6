function togglePassword() {
    let passwordField = document.getElementById("password");
    let button = document.getElementById("toggleBtn");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        button.innerText = "Hide";
    } else {
        passwordField.type = "password";
        button.innerText = "Show";
    }
}