console.log("mohit")
const togglePassword = document.querySelector("#togglePassword");
const togglePassword1 = document.querySelector("#togglePassword1");
const password = document.querySelector("#password");
const password1 = document.querySelector("#password1");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
    
});

togglePassword1.addEventListener("click", function () {
    // toggle the type attribute
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
    
});




