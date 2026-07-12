function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "suman" && pass === "22314") {
        document.getElementById("message").innerHTML =
        "✅ Welcome Suman!";
    } else {
        document.getElementById("message").innerHTML =
        "❌ Wrong Username or Password";
    }

}
