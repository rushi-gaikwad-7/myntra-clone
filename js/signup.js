

document.querySelector("#form").addEventListener("submit", addUser);
var form = document.querySelector("#form");
var arrUser= JSON.parse(localStorage.getItem("userData")) || [];
function addUser(event) {
    event.preventDefault();
    var userObj={
        email:  form.email.value,
        mobile:  form.num.value,
        password: form.pass.value,
    };
    arrUser.push(userObj);
    localStorage.setItem("userData",JSON.stringify(arrUser))
    document.querySelector("#email").value="";
      document.querySelector("#num").value="";
      document.querySelector("#pass").value="";
      window.location.href = "profile.html";
}