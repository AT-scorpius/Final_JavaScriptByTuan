var arradmin = [
    // {
    //     code: "User-1",
    //     fullname: "Tran Thi Nhu Mai",
    //     firstname: "Tran",
    //     lastname: "Mai",
    //     username: 'Mai Tran',
    //     password: "123456",
    //     phone: '0366852555',
    //     email: 'tranthinhumai2001@gmail.com',
    //     gender: "female",
    //     dateofbirth: "29/04/2001",
    //     address: 'Quang Nam'
    // },
    // {
    //     code: "User-2",
    //     fullname: "Pham Anh Tuan",
    //     firstname: "Pham",
    //     lastname: "Tuan",
    //     username: 'Tuan Pham',
    //     password: "1234567",
    //     phone: '012376201',
    //     email: 'phamtuan2000@gmail.com',
    //     gender: "male",
    //     dateofbirth: "12/06/2001",
    //     address: 'Quang Binh'
    // },
    // {
    //     code: "User-3",
    //     fullname: "Gia Cao Bang",
    //     firstname: "Gia",
    //     lastname: "Bang",
    //     username: 'Bang Gia Pham',
    //     password: "12345678",
    //     phone: '01233225201',
    //     email: 'giabang2000@gmail.com',
    //     gender: "male",
    //     dateofbirth: "22/09/2001",
    //     address: "Quang Binh"
    // },
    // {
    //     code: "User-4",
    //     fullname: "Nguyen Thi Thang",
    //     firstname: "Nguyen",
    //     lastname: "Thang",
    //     username: 'Thang Nguyen',
    //     password: "123456789",
    //     phone: '090325201',
    //     email: 'thangnguyen2000@gmail.com',
    //     gender: "female",
    //     dateofbirth: "20/06/2001",
    //     address: "Quang Binh"
    // }
]

//api
const API_URL = "https://60123f4884695f0017779eac.mockapi.io/ai";

function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}
load();

function load() {
    for (var i in arradmin)
        callAPI("admin", "POST", arradmin[i]).then((response) => {

        });
    callAPI("admin", "GET", null).then((res) => {
        arradmin = res.data;
        console.log(arradmin);
        // showUser();
    });
}
// load();
//Show Product
function showUser() {
    var users = [];
    callAPI("admin", "GET", null).then((res) => {
        users = res.data;
        let row = "";
        for (i in users) {
            row += "<tr >";
            row += "<td>" + users[i].id + "</td>";
            row += "<td>" + users[i].fullname + "</td>";
            row += "<td>" + users[i].lastname + "</td>";
            row += "<td>" + users[i].firstname + "</td>";
            row += "<td>" + users[i].username + "</td>";
            row += "<td>" + users[i].password + "</td>";
            row += "<td>" + users[i].phone + "</td>";
            row += "<td>" + users[i].email + "</td>";
            row += "<td>" + users[i].gender + "</td>";
            row += "<td>" + users[i].dateofbirth + "</td>";
            row += "<td>" + users[i].address + "</td>";
            // row += '<td><button onclick="updateAdmin(' + arradmin[i].id + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">  <i class="fas fa-cogs" placeholder="Edit booking"></i></button>';
            // row += '<button onclick="deleteAdmin(' + arradmin[i].id + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash" al></i></button></td>';
            row += "</tr>";
        }
        document.getElementById("user-manager").innerHTML = row;
    })
}
showUser();

//Lưu user
function saveUser() {
    alert("vào hàm");
    var fullname = document.getElementById("fullname").value;
    var nameaccount = document.getElementById("nameaccount").value;
    var sdt = document.getElementById("sdt").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        fullname: fullname,
        nameaccount: nameaccount,
        sdt: sdt,
        email: email,
        password: password,
    }
    callAPI("users", "POST", user).then((res) => {

        alert("Thêm thành công!");
        window.location.reload();

    });

}


//Update User
function updateUser(idd) {
    alert("vào hàm updateUser");
   
   
    let user ;
    callAPI(`users/${idd}`, "GET", null).then((res) => {
        user = res.data;
        
        document.getElementById("updatename").value = user.fullname;
        document.getElementById("updatenameaccount").value = user.nameaccount;
        document.getElementById("updatesdt").value = user.sdt;
        document.getElementById("updateemail").value = user.email;
        document.getElementById("updatepassword").value = user.password;
        document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + `users/${idd}` + ')"></button>';
    })
}

function submitUpdate(id){
    alert("vào hàm aa")
    let user={    
        fullname:document.getElementById("updatename").value,
        nameaccount:document.getElementById("updatenameaccount").value,
        sdt:document.getElementById("updatesdt").value,
        email:document.getElementById("updateemail").value,
       password:document.getElementById("updatepassword").value,
    }
    callAPI(`users/${id}`,"PUT",user).then((response)=>{
        alert("Cập nhật thành công");
        window.location.reload();
    })

    

}







//Xóa User
function deleteUser(id) {
    var r = confirm("Bạn có chắc muốn xoá sản phẩm?");
    if (r == true) {
        callAPI(`users/${id}`, "DELETE", null).then((response) => {

            alert("Xoá thành công!");
            window.location.reload()
            showUser();
        });
    }
}




// //api
// function push_data() {
//     var add = {
//         fullname: document.getElementById("fullname").value,
//         firstname: document.getElementById("firstname").value,
//         lastname: document.getElementById("lastname").value,
//         username: document.getElementById("username").value,
//         phonr: document.getElementById("phone").value,
//         email: document.getElementById("email").value,
//         sex: document.getElementById("gender").value,
//         dateofbirth: document.getElementById("dateofbirth").value,
//         address: document.getElementById("address").value,
//     }
//     callAPI("admin", "POST", add).then((response) => {
//         alert("Add product successful!");
//     });
//     showUser();
//     location.reload();
// }


// function deleteAdmin(id) {
//     var r = confirm("Are you sure want to delete the admin?");
//     if (r === true) {
//         callAPI(`Admin/${id}`, "DELETE", null).then((response) => {
//             alert("Delete successful!");
//             location.reload();
//         });
//     } else
//         location.reload();
// }

// function updateAdmin(id) {
//     callAPI(`Admin/${id}`, "GET", null).then((res) => {
//         var data = res.data;
//         console.log(data);
//         document.getElementById("fullnamed").value = data.fullname,
//             document.getElementById("firstnamed").value = data.firstname,
//             document.getElementById("lastnamed").value = data.lastname,
//             document.getElementById("usernamed").value = data.username,
//             document.getElementById("phoned").value = data.phone,
//             document.getElementById("emaild").value = data.email,
//             document.getElementById("sexd").value = data.sex,
//             document.getElementById("dateofbirthd").value = data.dateofbirth,
//             document.getElementById("addressd").value = data.address
//     });
//     document.getElementById('UpdateAdmin').innerHTML = '<button style="margin-top:17px" onclick="editok(' + id + ')" type="button" class="btn btn-secondary">Save changes</button>';
// }

// function editok(id) {
//     var oneProduct = {
//         // ID: document.getElementById("ID").value,
//         fullname: document.getElementById("fullnamed").value,
//         firstname: document.getElementById("firstnamed").value,
//         lastname: document.getElementById("lastnamed").value,
//         username: document.getElementById("usernamed").value,
//         phonr: document.getElementById("phoned").value,
//         email: document.getElementById("emaild").value,
//         sex: document.getElementById("sexd").value,
//         dateofbirth: document.getElementById("dateofbirthd").value,
//         address: document.getElementById("addressd").value,
//     };
//     callAPI(`Admin/${id}`, "PUT", oneProduct).then((response) => {
//         alert("Update successful!");
//         location.reload();
//     });
// // }
// // //api