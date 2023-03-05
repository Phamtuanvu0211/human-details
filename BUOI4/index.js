function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
    var email = document.getElementById("email").value;
    var gender;
    if (document.getElementById("gender1").checked) {
       gender= document.getElementById("gender1").value;
    }
    if (document.getElementById('gender2').checked) {
    gender = document.getElementById('gender2').value;
    }
    if (document.getElementById('gender3').checked) {
    gender= document.getElementById('gender3').value;
    }
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
    var save=[u,p1,email,gender];
    if(localStorage.getItem(u)){
        alert("Tài khoản đã tồn tại");
        return false;
    }
    localStorage.setItem(u,JSON.stringify(save));
    
    alert("Đăng ký thành công!")
    u='';
    p1='';
    p2='';
    return true;
    }