
function login() {
    
        var postData = JSON.stringify({
            "username": $("#username").val(),
            "password": $("#password").val()
        });
        $.ajax({
            url: '../api/Login',
            type: 'POST',
            data: postData,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
               
                if (data === 1) {
                    location.replace('../Templates/Home.html?UId=' + $("#username").val());
                }
                else {

                    $("#username").val('');
                    $("#password").val('');
                    alert("Login failed");
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
}
