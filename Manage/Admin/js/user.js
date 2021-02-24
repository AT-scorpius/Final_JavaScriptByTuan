var admin = [{
        id: "User-1",
        fullname: "Tran Thi Nhu Mai",
        firstname: "Tran",
        lastname: "Mai",
        username: 'Mai Tran',
        phone: '0366852555',
        email: 'tranthinhumai2001@gmail.com',
        sex: "female",
        dateofbirth: "29/04/2001",
        address: 'Quang Nam'
    },
    {
        id: "User-2",
        fullname: "Pham Anh Tuan",
        firstname: "Pham",
        lastname: "Tuan",
        username: 'Tuan Pham',
        phone: '012376201',
        email: 'phamtuan2000@gmail.com',
        sex: "male",
        dateofbirth: "12/06/2001",
        address: 'Quang Binh',
    },
    {
        id: "User-3",
        fullname: "Gia Cao Bang",
        firstname: "Gia",
        lastname: "Bang",
        username: 'Bang Gia Pham',
        phone: '01233225201',
        email: 'giabang2000@gmail.com',
        sex: "male",
        dateofbirth: "22/09/2001",
        address: "Quang Binh"
    },
    {
        id: "User-4",
        fullname: "Nguyen Thi Thang",
        firstname: "Nguyen",
        lastname: "Thang",
        username: 'Thang Nguyen',
        phone: '090325201',
        email: 'thangnguyen2000@gmail.com',
        sex: "female",
        dateofbirth: "20/06/2001",
        address: "Quang Binh"
    }
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
// load();

function load() {
    for (var i in admin)
        callAPI("Admin", "POST", admin[i]).then((response) => {

        });
    callAPI("Admin", "GET", null).then((res) => {
        admin = res.data;
        console.log(admin);
        // showUser();
    });
}
//Show Product
function showUser() {
    var users = [];
    callAPI("Admin", "GET", null).then((res) => {
        users = res.data;
        let row = "";
        for (i in users) {
            row += "<tr >";
            row += "<td>" + users[i].id + "</td>";
            row += "<td>" + users[i].fullname + "</td>";
            row += "<td>" + users[i].lastname + "</td>";
            row += "<td>" + users[i].firstname + "</td>";
            row += "<td>" + users[i].username + "</td>";
            row += "<td>" + users[i].phone + "</td>";
            row += "<td>" + users[i].email + "</td>";
            row += "<td>" + users[i].sex + "</td>";
            row += "<td>" + users[i].dateofbirth + "</td>";
            row += "<td>" + users[i].address + "</td>";
            // row += '<td><button onclick="editsp(' + preData[i].id + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">  <i class="fas fa-cogs" placeholder="Edit booking"></i></button>';
            // row += '<button onclick="deletesp(' + preData[i].id + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash" al></i></button></td>';
            row += "</tr>";
        }
        document.getElementById("user-manager").innerHTML = row;
    })
}
showUser();


//api
function push_data() {
    var add = {
        fullname: document.getElementById("fullname").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        username: document.getElementById("username").value,
        phonr: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        sex: document.getElementById("sex").value,
        dateofbirth: document.getElementById("dateofbirth").value,
        address: document.getElementById("address").value,
    }
    callAPI("Admin", "POST", add).then((response) => {
        alert("Add product successful!");
    });
    showUser();
    location.reload();
}


function deleteAdmin(id) {
    var r = confirm("Are you sure want to delete the admin?");
    if (r === true) {
        callAPI(`Admin/${id}`, "DELETE", null).then((response) => {
            alert("Delete successful!");
            location.reload();
        });
    } else
        location.reload();
}

function updateAdmin(id) {
    callAPI(`Admin/${id}`, "GET", null).then((res) => {
        var data = res.data;
        console.log(data);
        document.getElementById("fullnamed").value = data.fullname,
            document.getElementById("firstnamed").value = data.firstname,
            document.getElementById("lastnamed").value = data.lastname,
            document.getElementById("usernamed").value = data.username,
            document.getElementById("phoned").value = data.phone,
            document.getElementById("emaild").value = data.email,
            document.getElementById("sexd").value = data.sex,
            document.getElementById("dateofbirthd").value = data.dateofbirth,
            document.getElementById("address").value = data.address
    });
    document.getElementById('UpdateAdmin').innerHTML = '<button style="margin-top:17px" onclick="editok(' + id + ')" type="button" class="btn btn-secondary">Save changes</button>';
}

function editok(id) {
    var oneProduct = {
        // ID: document.getElementById("ID").value,
        fullname: document.getElementById("fullnamed").value,
        firstname: document.getElementById("firstnamed").value,
        lastname: document.getElementById("lastnamed").value,
        username: document.getElementById("usernamed").value,
        phonr: document.getElementById("phoned").value,
        email: document.getElementById("emaild").value,
        sex: document.getElementById("sexd").value,
        dateofbirth: document.getElementById("dateofbirthd").value,
        address: document.getElementById("addressd").value,
    };
    callAPI(`Admin/${id}`, "PUT", oneProduct).then((response) => {
        alert("Update successful!");
        location.reload();
    });
}
//api


// function submitUpdate() {
//     var id = document.getElementById("id").value;
//     for (var i in user)
//         if (id == user[i].id) {
//             var d = user[i];
//             user[i].name = document.getElementById("named").value;
//             user[i].username = document.getElementById("usernamed").value;
//             user[i].phone = document.getElementById("phoned").value;
//             user[i].email = document.getElementById("emaild").value;
//             user[i].address = document.getElementById("addressd").value;
//             user[i].role = $("#roled").find(":selected").val();
//             localStorage.setItem('listUser', JSON.stringify(user));
//             window.location.reload();
//             break;
//         }
// }

// function deleteUser(i) {
//     document.getElementById("idDelete").innerHTML = user[i].id;
// }

// function submitDelete() {
//     var id = document.getElementById("idDelete").innerHTML;
//     for (var i in user) {
//         var d = JSON.parse(JSON.stringify(user[i]))
//         if (id == d.id) {
//             load();
//             user.splice(i, 1);
//             save();
//             window.location.reload();
//         }
//     }
// }

// function show() {
//     var listUSer = '';
//     for (i in user) {
//         var data = JSON.parse(JSON.stringify(user[i]))
//         listUSer += "<tr>";
//         listUSer += "<td>" + data.id + "</td>";
//         listUSer += "<td>" + data.username + "</td>";
//         listUSer += "<td>" + data.name + "</td>";
//         listUSer += "<td>" + data.phone + "</td>";
//         listUSer += "<td>" + data.email + "</td>";
//         listUSer += "<td>" + data.address + "</td>";
//         listUSer += "<td>" + data.role + "</td>";
//         listUSer += "<td>" + '<button class = "btn btn-danger" data-toggle = "modal"data-target = "#updateUser" onclick="updateUser(' + i + ')">';
//         listUSer += '<a href="#"> <i class="fa fa-cogs"> </i> </a>' + '</button>';
//         listUSer += '<button class = "btn btn-warning" data-toggle = "modal" data-target="#deleteUser" onclick="deleteUser(' + i + ')"> <a href="#"> <i class="fa fa-trash"> </i>  </a> </button>' + "</td>";
//         listUSer += "</tr>";
//     }
//     document.getElementById("user-manager").innerHTML = listUSer;
//     save();
// }

// function addUser() {
//     var pro = {
//         id: "User-" + parseInt(user.length + 1),
//         name: document.getElementById('name').value,
//         username: document.getElementById('username').value,
//         phone: document.getElementById('phone').value,
//         email: document.getElementById('email').value,
//         address: document.getElementById('address').value,
//         role: $("#role").find(":selected").val()
//     }
//     load();
//     user.push(pro);
//     save();
//     window.location.reload();
// }

// function showUser() {
//     document.getElementById("product-manage").style.display = "block";
//     document.getElementById("user-manage").style.display = "none";
// }

// function showProduct() {
//     document.getElementById("product-manage").style.display = "none";
//     document.getElementById("user-manage").style.display = "block";
// }