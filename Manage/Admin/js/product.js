// 
// const API_URL = "https://60123f4884695f0017779eac.mockapi.io/ai";

// function callAPI(endpoint, method = "GET", body) {
//     return axios({
//         method: method,
//         url: `${API_URL}/${endpoint}`,
//         data: body,
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// var admin = JSON.parse(localStorage.getItem("admin")) || [];
// document.getElementById("admin").innerHTML = admin.user;

// var id;

// function save() {
//     document.getElementById("huy").style.display = "none";
//     document.getElementById("themmoi").style.display = "block";
//     document.getElementById("divAddHotel").style.display = "none";
//     var hotels = JSON.parse(localStorage.getItem("hotels")) || [];
//     for (i = 0; i <= hotels.length; i++) {
//         id = i;
//     }
//     var name = document.getElementById("nameproduct").value;
//     var price = document.getElementById("priceproduct").value | 0;
//     var note = document.getElementById("noteproduct").value;
//     var detail = document.getElementById("detailproduct").value;
//     let img = document.getElementById("imgproduct").value;
//     let image = img.split("\\")[2];
//     if (name | detail | note | (price != "")) {
//         var oneProduct = {
//             id: id,
//             name: name,
//             price: price,
//             note: note,
//             detail: detail,
//             img: "images/" + image,
//         };
//         hotels.push(oneProduct);
//         callAPI("hotels", "POST", oneProduct).then((response) => {
//             show();
//             alert("Thêm phòng thành công!");
//         });

//     } else {
//         reset();
//     }
// }
// document.getElementById("divAddHotel").style.display = "none";
// document.getElementById("huy").style.display = "none";

// function addHotel() {
//     document.getElementById("divAddHotel").style.display = "block";
//     document.getElementById("huy").style.display = "block";
//     document.getElementById("themmoi").style.display = "none";
// }

//

var preData = [{
            ID: "1",
            type: "Stupffed animal",
            name: "STRIPED BUFFALO SHIRT",
            img: "image/gauTrauAoKe1.jpg",
            img2: "image/gauTrauAoKe2.jpg",
            img3: "image/gauTrauAoKe3.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "50cm",
            price: 170000,
            price2: 250000,
            price3: 340000,
            status: "stocking",
            comment: "Bong Ao Ke buffalo is currently sold at the store with 2 sizes 40cm, 50cm and 3 colors blue, pink,</br> orange, priced from only 190,000 VND",
            comment2: "Cotton Buffalo Plaid",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
        {
            ID: "2",
            type: "Stupffed animal",
            name: "BUFFALO NECK PILLOWS",
            img: "image/gauCoTrau.jpg",
            img2: "image/gauCoTrau2.jpg",
            img3: "image/gauCoTrau3.jpg",
            size1: "1m2",
            size2: "1m5",
            size3: "1m",
            price: 150000,
            price2: 200000,
            price3: 30000,
            status: "stocking",
            comment: "Co Trau pillows are currently sold at stores with 3 colors: blue, red, and yellow, priced at only 150,000 VND",
            comment2: "Buffalo Neck Pillows - Red",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
        {
            ID: "3",
            type: "Stupffed animal",
            name: "Dinosaur teddy bear",
            img: "image/1.png",
            img2: "image/khungLong2.jpg",
            img3: "image/khungLong3.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "50cm",
            price: 390000,
            price2: 550000,
            price3: 585000,
            status: "stocking",
            comment: "Fluffy Dinosaur Teddy Bear",
            comment2: "Cute pink dinosaur teddy bear",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
        {
            ID: "4",
            type: "Teddy",
            name: "TEDDY BEAR CREAM CAKE",
            img: "image/teddy.jpg",
            img2: "image/teddy4.jpg",
            img3: "image/teddy5.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "1m6",
            price: 490000,
            price2: 750000,
            price3: 985000,
            status: "stocking",
            comment: "Fluffy Dinosaur Teddy Bear",
            comment2: "Cute pink dinosaur teddy bear",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
        {
            ID: "5",
            type: "Teddy",
            name: "TEDDY ANGEL PINK",
            img: "image/teddyHong1.jpg",
            img2: "image/teddyHong2.jpg",
            img3: "image/teddyHong3.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "1m6",
            price: 290000,
            price2: 550000,
            price3: 585000,
            status: "stocking",
            comment: "Fluffy Dinosaur Teddy Bear",
            comment2: "Cute pink dinosaur teddy bear",
            comment3: "The Tail and Rear Legs of the Hug Pillowai"
        },
        {
            ID: "6",
            type: "Cat",
            name: "cute cat",
            img: "image/meo2.jpg",
            img2: "image/meo4.jpg",
            img3: "image/meo5.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "50cm",
            price: 290000,
            price2: 550000,
            price3: 585000,
            status: "stocking",
            comment: "Fluffy Dinosaur Teddy Bear",
            comment2: "Cute pink dinosaur teddy bear",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
        {
            ID: "7",
            type: "Doremon",
            name: "Cute doremon",
            img: "image/12.jfif",
            img2: "image/12.jfif",
            img3: "image/bigDoremon1.jpg",
            size1: "1m",
            size2: "1m3",
            size3: "50cm",
            price: 290000,
            price2: 550000,
            price3: 585000,
            status: "stocking",
            comment: "Fluffy Dinosaur Teddy Bear",
            comment2: "Cute pink dinosaur teddy bear",
            comment3: "The Tail and Rear Legs of the Hug Pillow"
        },
    ]
    //

const API_URL = "https://60123f4884695f0017779eac.mockapi.io/ai";

//mang

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
    for (var i in preData)
        callAPI("product", "POST", preData[i]).then((response) => {

        });
    callAPI("product", "GET", null).then((res) => {
        preData = res.data;
        console.log(preData);
        // showProduct();
    });
}
//Show Product
function showProduct() {
    var users = [];
    callAPI("product", "GET", null).then((res) => {
        users = res.data;
        let row = "";
        for (i in users) {
            row += "<tr >";
            row += "<td>" + users[i].ID + "</td>";
            row += "<td>" + users[i].type + "</td>";
            row += "<td>" + users[i].name + "</td>";
            row += "<td>" + users[i].img + "</td>";
            row += "<td>" + users[i].img2 + "</td>";
            row += "<td>" + users[i].img3 + "</td>";
            row += "<td>" + users[i].size1 + "</td>";
            row += "<td>" + users[i].size2 + "</td>";
            row += "<td>" + users[i].size3 + "</td>";
            row += "<td>" + users[i].price + "</td>";
            row += "<td>" + users[i].price2 + "</td>";
            row += "<td>" + users[i].price3 + "</td>";
            row += "<td>" + users[i].status + "</td>";
            row += "<td>" + users[i].comment + "</td>";
            row += "<td>" + users[i].comment2 + "</td>";
            row += "<td>" + users[i].comment3 + "</td>";
            //row += '<td><button onclick="updateProduct(' + preData[i].id + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct">  <i class="fas fa-cogs" placeholder="Edit booking"></i></button>';
            //row += '<button onclick="deleteProduct(' + preData[i].id + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash" al></i></button></td>';
            row += "</tr>";
        }
        document.getElementById("product-admin").innerHTML = row;
    })
}
showProduct();
//

function push_data() {
    var add = {
        type: document.getElementById("type").value,
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        img2: document.getElementById("img2").value,
        img3: document.getElementById("img3").value,
        size1: document.getElementById("size1").value,
        size2: document.getElementById("size2").value,
        size3: document.getElementById("size3").value,
        price: document.getElementById("price").value,
        price2: document.getElementById("price2").value,
        price3: document.getElementById("price3").value,
        status: document.getElementById("status").value,
        comment: document.getElementById("comment").value,
        comment2: document.getElementById("comment2").value,
        comment3: document.getElementById("comment3").value,
    }
    callAPI("product", "POST", add).then((response) => {
        alert("Add product successful!");
    });
    showProduct();
    location.reload();
}


function deleteProduct(id) {
    var r = confirm("Are you sure want to delete the product?");
    if (r === true) {
        callAPI(`product/${id}`, "DELETE", null).then((response) => {
            alert("Delete successful!");
            location.reload();
        });
    } else
        location.reload();
}

function updateProduct(id) {
    callAPI(`product/${id}`, "GET", null).then((res) => {
        var data = res.data;
        console.log(data);
        // document.getElementById("idd").value = data.ID,
        document.getElementById("named").value = data.type,
            document.getElementById("named").value = data.name,
            document.getElementById("imgd").value = data.img,
            document.getElementById("imgd2").value = data.img2,
            document.getElementById("imgd3").value = data.img3,
            document.getElementById("sized1").value = data.size1,
            document.getElementById("sized2").value = data.size2,
            document.getElementById("sized3").value = data.size3,
            document.getElementById("priced").value = data.price,
            document.getElementById("priced2").value = data.price2,
            document.getElementById("priced3").value = data.price3,
            document.getElementById("statusd").value = data.status,
            document.getElementById("commentd").value = data.comment,
            document.getElementById("commentd2").value = data.comment2,
            document.getElementById("commentd3").value = data.comment3
    });
    document.getElementById('UpdateProduct').innerHTML = '<button style="margin-top:17px" onclick="editok(' + id + ')" type="button" class="btn btn-secondary">Save changes</button>';
}

function editok(id) {
    var oneProduct = {
        // ID: document.getElementById("ID").value,
        type: document.getElementById("typed").value,
        name: document.getElementById("named").value,
        img: document.getElementById("imgd").value,
        img2: document.getElementById("imgd2").value,
        img3: document.getElementById("imgd3").value,
        size1: document.getElementById("sized1").value,
        size2: document.getElementById("sized2").value,
        size3: document.getElementById("sized3").value,
        price: document.getElementById("priced").value,
        price2: document.getElementById("priced2").value,
        price3: document.getElementById("priced3").value,
        status: document.getElementById("statusd").value,
        comment: document.getElementById("commentd").value,
        comment2: document.getElementById("commentd2").value,
        comment3: document.getElementById("commentd3").value,

    };
    callAPI(`product/${id}`, "PUT", oneProduct).then((response) => {
        alert("Update successful!");
        location.reload();
    });
}