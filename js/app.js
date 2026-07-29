function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau Password salah!");
    }
}
