document.getElementById("Contact").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = "Đã gửi: " + name + " (" + email + ")";
    document.getElementById("message").innerText = message;
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("email")[0].value = "";
});