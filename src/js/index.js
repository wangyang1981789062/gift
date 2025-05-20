$("#login-button").click(function (event) {
    const userName = document.getElementById("userName").value;
    const pwd = document.getElementById("pwd").value;
    //修改密码请改此处
    if (userName === "米伽Mika" && pwd === "1213") {
        event.preventDefault();
        $("form").fadeOut(500);
        $(".wrapper").addClass("form-success");
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 2000);
    } else {
        alert("Wrong Password");
    }
});
