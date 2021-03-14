function setListUser(arrUser) { //lưu tạm dữ liệu vào local storage sau này có API sửa sau
    localStorage.setItem('listUser', JSON.stringify(arrUser));
}
API_URL = 'http://localhost:3000/Users';

function getListUser(callback) { //lấy list User ra
    fetch(API_URL)
        .then(response => response.json())
        .then(callback);
}
PromiseLogin = () => {
    getListUser((res) => checkLogin(res)); //anonymous function nhận giá trị trả về của API truyền vào callback
}

function resetListUser() {
    localStorage.clear('listUser');
}

function pushUser(o) {
    localStorage.clear('User');
    localStorage.setItem('User', JSON.stringify(o));
    console.log('User Online: ' + o.email);
} //Đẩy id user vào local storage

function getUser() { //Nhận Dạng tài khoản đang đăng nhập
    return JSON.parse(localStorage.getItem('User'));
} //lấy id sản phẩm từ local storage
function resetUser() { //Đăng Xuất reset lại tài khoản
    localStorage.clear('User');
}


checkLogin = (response) => {
    console.log('Chạy Hàm đăng nhập!');
    const data = response
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (email.toLowerCase() == 'admin') {
        if (data[0].password == password) {
            //Đẩy đối tượng vào localstorage để nhận biết tài khoản nào đang đăng nhập
            pushUser(data[0])
            alert('Logged in successfully!')
            window.location.href = '../Admin/Admin.html';
        } else {
            alert('The password is incorrect! ')
        }
    } else {
        let kt = false;
        for (let i = 0; i < data.length; i++) {
            if (email == data[i].email) {
                kt = true;
                if (password == data[i].password) {

                    //Đẩy đối tượng vào localstorage để nhận biết tài khoản nào đang đăng nhập
                    pushUser(data[i])

                    console.log('Kiểm tra xong mk' + data[i].password);
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


sendEmail = () => {
    var kt = document.getElementById('email').value;
    if (kt == '') {
        alert('Please enter full information!');
        window.reLoad();
    } else {
        document.getElementById('email-code').value = '';
        content = randomCode(100000, 999999);
        var email = document.getElementById('email').value
        console.log('code random: ' + content);
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

////////////////////////////////////////
function account(id, name, email, password) {
    this.id = id;
    this.fullName = name;
    this.email = email;
    this.password = password;
    this.phone = 'Not set up!';
    this.gender = 'Not set up!';
    this.address = 'Not set up!';

}
createAccount = () => { //tạo tải khoản mới
    //Không lấy được ID
    id += 1;
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var newAcc = new account(id, fullName, email, password);
    pushAccount(newAcc);
    runCreateAccount();
}

runCreateAccount = () => {
    if (enterCode()) {
        createAccount();
        window.location.href = 'login.html';
    }

}

pushAccount = (data) => {
        fetch(API_URL, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        ///Dùng API đăng kí tài khoản

    }
    ////////////////////////////////////////////
checkEmail = () => {

    let email = document.getElementById('email').value;
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


enterCode = () => {
    code = document.getElementById('email-code').value;
    console.log('Giá trị nhập vào:' + code);
    compareCode();
}

compareCode = () => {
    if (content == code) {
        alert('The code is correct!')
        return true;
    } else {
        alert('The code is incorrect (Please check the code sent in the email)')
        document.getElementById('email-code').value = '';
    }
}


///////////////////////////////////////////////
getPassword = () => {
    var get = checkEmail();
    if (get != 0) { alert('Your password is: ' + get.password); }

}

forgotPassword = () => {
    enterCode()
    getPassword();
    window.location.href = 'login.html';

}