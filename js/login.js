


document.querySelector("#login").addEventListener("click", checkUser);
var number = document.querySelector("#mobile");
var arrUser= JSON.parse(localStorage.getItem("userData")) || [];
function checkUser() {
    var userObj=
    {
        mobile:number.value,
    };

    arrUser.push(userObj);
    for(var i=0;i<arrUser.length;i++)
    {
      var flag= false;
        if(arrUser[i].mobile == mobile )
        {
            flag=true;
            window.location.href = "index.html";
        }
       else
    {
        window.location.href = "otp.html";
        localStorage.setItem("userData",JSON.stringify(arrUser));
    }
    }
    
     document.querySelector("#mobile").value="";
}