


function setListUser(arrUser) {//lưu tạm dữ liệu vào local storage sau này có API sửa sau
    localStorage.setItem('listUser', JSON.stringify(arrUser));
}
function getListUser () {//lấy list User ra
    return JSON.parse(localStorage.getItem('listUser'));
}
function resetListUser () {
    localStorage.clear('listUser');
}
function pushUser(o) {
    localStorage.clear('User');
    localStorage.setItem('User', JSON.stringify(o));
    console.log('Trong local storage User: '+o.email);
}//Đẩy id sp vào local storage

function getUser() {
    return JSON.parse(localStorage.getItem('User'));
}//lấy id sản phẩm từ local storage
function resetUser() {
    localStorage.clear('User');
}//Đẩy id sp vào local storage
class account {

    constructor(name, email, password) {
        this.fullName = name;
        this.email = email;
        this.password = password;

        this.phone = 'Not set up!';
        this.gender = 'Not set up!';
        this.address = 'Not set up!';
    }


}
function checkLogin() {
    console.log('Chạy Hàm đăng nhập!');
    var arrUser = getListUser();
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
   
    if (email.toLowerCase() == 'admin') {
        if (arrUser[0].password == password) {
            //Đẩy đối tượng vào localstorage để nhận biết tài khoản nào đang đăng nhập
            pushUser(arrUser[0])
            alert('Logged in successfully!')
            window.location.href = '../Admin/Admin.html';
        } else {
            alert('The password is incorrect! ')
        }
    } else {
        let kt = false;
        for (let i = 0; i < arrUser.length; i++) {
            if (email == arrUser[i].email) {
                kt = true;
                if (password == arrUser[i].password) {

                   //Đẩy đối tượng vào localstorage để nhận biết tài khoản nào đang đăng nhập
                    pushUser(arrUser[i])
                    
                    console.log('Kiểm tra xong mk' + arrUser[i].password);
                    alert('Logged in successfully!')
                    window.location.href = '../User/User.html';
                }
            }
        }
        if (!kt) {
            alert(`This email is not registered!
                        Please register to use the service...`);
        }
    }


}


function sendEmail() {
    var kt = document.getElementById('email').value;
    if (kt == '') {
        alert('Please enter full information!');
        window.reLoad();
    } else {
        document.getElementById('email-code').value = '';
        content = randomCode(100000, 999999);
        var email = document.getElementById('email').value
        console.log('code random: '+content);
        console.log('lilpham987@gmail.com   123456');
        Email.send({
            Host: "smtp.gmail.com",
            Username: "autosendemail69@gmail.com",
            Password: "tuanpham22",
            To: email,
            From: "autosendemail69@gmail.com",
            Subject: "Mã xác nhận",
            Body: 'This is your account verification code: <br><br><Strong>' + content + `</Strong>
            <br>
            + Thank for using our service! 
            <br>
                    Đưa tay đây nào, mãi bên nhau bạn nhớ
                    <br> <br>
                    
                    <img src="https://i.pinimg.com/originals/1f/93/c1/1f93c19676ef2ad80f17ee5c228d8559.png" alt="mãi iu anh">
            <br><br>
                   <3 iu anh Tuấn nhất trên đời! ^-^
    
            `
        }).then(
            message => console.log('data', message)
        );

    }


}
function randomCode(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// Đẩy thêm tài khoản mới
function pushAccount(newAcc) {
    let arrUser = getListUser();
    arrUser.push(newAcc);
    resetListUser();
    setListUser(arUser);
}
function createAccount() {//tạo tải khoản mới
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var newAcc = new account(fullName, email, password);
    pushAccount(newAcc);
}
function forgotPassword(){
    enterCode()
    getPassword();
    window.location.href = 'login.html';
    
}
checkEmail=()=>{
    var arrUser = getListUser();
    let email= document.getElementById('email').value;
    let kt = false;
    for (let i = 0; i < arrUser.length; i++) {
        if (email == arrUser[i].email) {
            return arrUser[i];
        }
    }
    if (!kt) {
        alert(`This email is not registered!
                    Please register to use the service...`);
                    return 0;
    }
}
function getPassword(){
    var get=checkEmail();
    if(get!=0){alert('Your password is: '+get.password);}
    
}
function createAccount(){
    if(enterCode()){
        createAccount();
        window.location.href = 'login.html';
    }
    
}
function enterCode() {
    code = document.getElementById('email-code').value;
    console.log('Giá trị nhập vào:' + code);
    compareCode();
}
function compareCode() {
    if (content == code) {
        alert('The code is correct!')

    } else {
        alert('The code is incorrect (Please check the code sent in the email)')
        document.getElementById('email-code').value = '';
    }
}

