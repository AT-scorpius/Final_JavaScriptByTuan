const DATA_ON_PAGE = 4;
saveUser=(object)=>{
    localStorage.setItem('User',object);
}
// Hàm Đăng Xuất
logOut=()=>{
    localStorage.clear('User');
}
function pushID(id) {
    localStorage.setItem('listID', JSON.stringify(id));
    console.log(id);
}

function loadID() {
    return JSON.parse(localStorage.getItem('listID'));
}

function save(preData) {//lưu product vào localstorage
    localStorage.setItem('listProduct', JSON.stringify(preData));
}



function saveCurrentPage(page) {
    localStorage.setItem('currentPage', JSON.stringify(page));
}

function getCurrentPage() {
    return localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : 1
}

function setIsSearch(isSearch) {
    localStorage.setItem('isSearch', JSON.stringify(isSearch));

}

function getIsSearch(isSearch) {
    return localStorage.getItem("isSearch") ? JSON.parse(localStorage.getItem("isSearch")) : false
}

function load() {
    return JSON.parse(localStorage.getItem('listProduct'));
}

function reLoad() {
    window.location.reload()
}

function goToHome() {
    localStorage.removeItem("listProduct")
    localStorage.removeItem("currentPage")
    localStorage.removeItem("isSearch")
    window.location.href = "./User.html"
    document.getElementById("detail-product").style.display = "none";
    document.getElementById("search-content").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}

function filterType() {
    // Dữ liệu này có thể lấy từ API <> preData là dữ liệu mẫu
    let product = preData;
    var type = [];
    for (var m = 0; m < product.length; m++) {
        type.push(product[m].type);
    }
    var filType = [];
    for (let i = 0; i < type.length; i++) {
        if (filType.indexOf(type[i]) === -1) {
            filType.push(type[i])
        }
    }
    return filType;
}

function DM() {
    // Dữ liệu này có thể lấy từ API <> preData là dữ liệu mẫu
    let product = preData;
    type = filterType();
    console.log("runnn");
    var notice = "";
    console.log("runnn");
    for (t = 0; t < type.length; t++) {
        var noticeDM = '<div id="notice-DM-' + t + '"></div>';
        document.getElementById("show-DM").innerHTML += noticeDM;
        var showDM = '<div id="show-DM-' + t + '"></div>';
        document.getElementById("show-DM").innerHTML += showDM;
        var showPageDM = '<div id="page-DM-' + t + '" class="page"></div>';
        document.getElementById("show-DM").innerHTML += showPageDM;

        var slDM = 0;
        var listproductDisplay = "";
        for (var i = 0; i < product.length; i++) {
            if (product[i].type.toLowerCase() == type[t].toLowerCase()) {
                slDM++;
                var data = product[i];
                listproductDisplay += '<div class= "col-md-3 col-xs-6 col-sm-6">';
                listproductDisplay += '<div class="products">';
                listproductDisplay += '<a onclick="pushID(' + data.ID + ');Chitiet()" role="#detail-product">';
                listproductDisplay += ' <div class="thumbnail"><img src="../../' + data.img + '" alt="..."></div>';
                listproductDisplay += '<div class="bottom-product">';
                listproductDisplay += '<div class="productname">' + data.name + '</div>';
                listproductDisplay += '<h4 class="price">' + data.price + ' VNĐ</h4>';
                listproductDisplay += '</a>';
                listproductDisplay += ' <div class="button_group"><button class="button add-cart" type="button" onclick="addCart(' + data.ID + ')">Add To Cart';
                listproductDisplay += ' </button><button class="button wishlist" type="button" onclick="like(' + data.ID + ')"><i class="fa fa-heart-o"></i></button></div>';
                listproductDisplay += '</div> </div> </div>';
            }

        }
        document.getElementById("show-DM-" + t).innerHTML = listproductDisplay;
        if (slDM == 0) {
            notice = '<h2 class="title"><strong>' + type[t] + '</strong> list is not in the system!</h2>';
        } else {
            notice = '<h2 class="title"><strong>' + type[t] + '</strong> have <strong>' + slDM + '</strong> products </h2>';

        }
        document.getElementById('notice-DM-' + t).innerHTML = notice;
    }

}

//search
function search() {

    var key = document.getElementById("search").value;
    console.log(key);
    let product = preData
    
if(key!=''){
    var listSearch = [];
    for (let i = 0; i < product.length; i++) {
        console.log(product[i].name);
        if (product[i].name.toLowerCase().search(key) >= 0) {
            console.log("found");
            listSearch.push(product[i]);
        }
    }
    save(listSearch)
}
   
    // Hàm này lưu chuỗi vào listProduct localStorage=> Dữ liệu động <> nên bên trên lấy dữ liệu mẫu preData
    saveCurrentPage(1)
    setIsSearch(true)
    reLoad()
}

const displayData = (data, page = 1, isSearch = false, numDataOfPage = DATA_ON_PAGE) => {
    var first = (page - 1) * numDataOfPage
    var last = (first + numDataOfPage - 1 < data.length) ? first + numDataOfPage : data.length;
    var listproductDisplay = " ";
    for (var i = first; i < last; i++) {
        console.log(data[i].ID);
        listproductDisplay += '<div class= "col-md-3 col-xs-6 col-sm-6">';
        listproductDisplay += '<div class="products">';
        listproductDisplay += '<a onclick="pushID(' + data[i].ID + ');Chitiet()" href="#detail-product">';
        listproductDisplay += '<div class="bottom-product">';
        listproductDisplay += ' <div class="thumbnail"> <img src="../../' + data[i].img + '" alt="..."></div>';
        listproductDisplay += '<div class="productname">' + data[i].name + '</div>';
        listproductDisplay += '<h4 class="price">' + data[i].price + ' VNĐ</h4>';
        listproductDisplay += '</a>';
        listproductDisplay += ' <div class="button_group"><button class="button add-cart" type="button" onclick="addCart(' + data[i].ID + ')">Add To Cart';
        listproductDisplay += ' </button><button class="button wishlist" type="button" onclick="like(' + data[i].ID + ')"><i class="fa fa-heart-o"></i></button></div>';
        listproductDisplay += '</div> </div> </div>';
    }
    var pageLength = Math.round((data.length) / numDataOfPage)
    var pageItemShow = ""
    for (let i = 1; i <= pageLength; i++) {
        pageItemShow += '<a role="button">'
        if (i == page) {
            pageItemShow += '<button class = "isCurrentPage" onclick="goToNextPage(' + i + ')" >' + (i) + '</button></a>'
        } else {
            pageItemShow += '<button class = "buttonPage" onclick="goToNextPage(' + i + ')" >' + (i) + '</button></a>'

        }
    }
    if (isSearch) {
        //div search 
        document.getElementById("search-content").style.display = "block";
        //div notice
        var notice = '<h2 class="title"><strong>There are </strong>' + data.length + ' products found!</h2>';
        document.getElementById('notice-search').innerHTML = notice;
        //div data 
        document.getElementById("show-search").innerHTML = listproductDisplay
        //div num page
        document.getElementById("page-search").innerHTML = pageItemShow
    } else {
        //div notice
        document.getElementById("quantity").innerHTML = "(" + data.length + ")";
        //div data
        document.getElementById("showAll").innerHTML = listproductDisplay
        //div num page
        document.getElementById("page").innerHTML = pageItemShow

    }


}
// Chuyển trang mỗi lần bấm button trang
const goToNextPage = (page) => {
    saveCurrentPage(page)
    reLoad()
}

const DMtest = () => {
    // Dữ liệu này có thể lấy từ API <> preData là dữ liệu mẫu
    let product = preData;
    type = filterType();

    var notice = "";

    var arrCagorite = [];
    for (t = 0; t < type.length; t++) {
        arrCagorite[t] = [];
        for (var i = 0; i < product.length; i++) {
            if (product[i].type.toLowerCase() == type[t].toLowerCase()) {
                arrCagorite[t].push(product[i]);
            }

        }

    }
    localStorage.setItem('listType', JSON.stringify(arrCagorite));
    console.log(arrCagorite);


}
// Chi tiết sản phẩm
function Chitiet() {
    load();
    var i = loadID();
    let product = preData;
    document.getElementById("detail-product").style.display = "block";
    document.getElementById("home-page").style.display = "none";
    var html = '';
    for (var key in product) {

        if (product[key].ID == i) {
            var data = product[key];
            html += '<div  id="detail">'
            html += `   ${html}
            <div class="detail1">
        <div class="col-md-6 col-xs-12 col-sm-12">
            <div id="hinhanh" class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1"><img src="../../${data.img}" /></div>
                <div class="tab-pane" id="pic-2"><img src="../../${data.img2}" /></div>
                <div class="tab-pane" id="pic-3"><img src="../../${data.img3}" /></div>
                <ul class="preview-thumbnail nav nav-tabs" style="size:40%">
                    <li class="active " style="size:40% ">
                        <a data-target="#pic-1" data-toggle="tab "><img src="../../${data.img} " /></a>
                    </li>
                    <li>
                        <a data-target="#pic-2" data-toggle="tab "><img src="../../${data.img2} " /></a>
                    </li>
                    <li>
                        <a data-target="#pic-3" data-toggle="tab "><img src="../../${data.img3} " /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="boSung">
            <div class="col-md-6 col-xs-12 col-sm-12">
                <div class="noiDung ">
                    <p> <strong>${data.name}</strong></p>
                </div>
                <div class="price_size ">
                    <table id="table ">
                        <tr style="color:rgb(62, 84, 131) ">
                            <th>SIZE</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                        </tr>
                        <tr>
                            <td>${data.size1}</td>
                            <td>${data.price} VNĐ</td>
                            <td>${data.status} </td>
                        </tr>
                        <tr>
                            <td>${data.size2}</td>
                            <td>${data.price2} VNĐ</td>
                            <td>${data.status2} </td>
                        </tr>
                        <tr>
                            <td>${data.size3} </td>
                            <td>${data.price3} VNĐ</td>
                            <td>${data.status3} </td>
                        </tr>
                    </table>
                    <br>

                </div>
                <div class="button ">
                    <button type="button " id="buyProduct " style=" width: 100px;
                    height: 50px;
                    background: #ffffff;
                    border: orange solid 1px;
                    border-radius: 5px 5px 5px 5px;">BUY NOW</button>
                    <button type="button " id="addProduct " style="   width: 100px;
                    height: 50px;
                    background: #FFB6C1;
                    /* border: orange solid 1px; */
                    border-radius: 5px 5px 5px 5px;"class="fas fa-shopping-cart " onclick="addCart(${i})"></button>
                </div>

            </div>
        </div>

    </div>
    <div class="container">
        <div class="addInfor">
            <div id="guide-buy">
           
               
            <p><i class="far fa-heart "></i> <span>Gift Wrapping - Small Bear - Giving Free Cards</span></p>
            <p><i class="far fa-heart "></i> <span>Fast Delivery - Punctual Delivery & Hand-Handed</span></p>
            <p><i class="far fa-heart "></i> <span>Nationwide Delivery 2 - 5 Days - Receiving New Payments</span></p>
            <p><i class="far fa-heart "></i> <span>Permanent Road Warranty - 1 year Teddy Bear Warranty</span></p>
            <p><i class="far fa-heart "></i> <span>Bear Washing & Cleaning Service at Home Cheap Price</span></p>
            <p> <i class="far fa-heart "></i> <span>Shop Addresses Easy To Find - Free Car Parking</span></p>
            <p><i class="fas fa-map-marker-alt "></i> <span>101B_ Le Huu Trac_ Son Tra_ Da Nang</p>
            <p><i class="fas fa-phone"></i>     Phone: <strong>0945841549</strong></span></p>
               
                
            </div>
            <hr style="background-color: #e83e8c;height: 2px;">
            <div class="col-12 ">
                <div class="Hinh" id="pic-detail">
                    <div class="hinh2 "><img src="../../${data.img} " /> </br>
                        <p>${data.comment}</p>
                    </div>
                    </br>
                    <div class="hinh2 "><img src="../../${data.img2} " /></br>
                        <p>${data.comment2}</p>
                    </div>
                    </br>
                    <div class="hinh2 "><img src="../../${data.img3} " /></div>
                    </br>
                </div>
    
                <br>
            </div>
        </div>
    </div>
</div>  
`
            break;
        }
    }

    document.getElementById('detail-product').innerHTML = html;
    load();
    console.log('print detail');
}

// GIỎ HÀNG
var card = [];

function saveListCard() {
    localStorage.setItem('ListCard', JSON.stringify(card));
}


function loadListCard() {
    card = JSON.parse(localStorage.getItem('ListCard'));
}

if (localStorage.getItem('ListCard') != null) {
    loadListCard();
}

function getListCard() {
    return JSON.parse(window.localStorage.getItem('ListCard'));
}
// localStorage.setItem('ListCard', JSON.stringify(card));

function setListCard(card) {
    localStorage.setItem('ListCard', JSON.stringify(card));
}

if (localStorage.getItem('ListCard') != null) {
    getListCard();
}

function addCart(id) {
    let product = load();
    for (let i in product) {
        if (id == product[i].ID) {
            card.push(product[i]);
        }
        setListCard(card);
    }
    alert("Added to cart successfully!");
}

function showCard() {
    var total = 0;
    var ship = 35000;
    var grand_total = 0;
    console.log(card);
    for (var key in card) {
        let html = "";
        var data = card[key];
        console.log(data);
        total = total + data.price;

        html += `
        <tr>
        <td>${data.ID}</td>
        <td>${data.name}</td>
        <td> <img src="../${data.img}" alt="" style="width:100px;height:100px"></td>
        <td> ${data.price}</td>
        <td>   <button  onclick="deleteProduct('+key+')" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button></td>   
    </tr>`;

        document.getElementById("tab1").innerHTML += html;

    }
    grand_total = grand_total + total + ship;
    document.getElementById("sub").innerHTML = total + ' VNĐ';
    document.getElementById("money_ship").innerHTML = ship + ' VNĐ';
    document.getElementById("money").innerHTML = grand_total + ' VNĐ';
    document.getElementById("subt").innerHTML = total + ' VNĐ';
    document.getElementById("money_shipt").innerHTML = ship + ' VNĐ';
    document.getElementById("moneyt").innerHTML = grand_total + ' VNĐ';
}

// function caculater() {
//     for (var key in card) {
//         let html = "";
//         var sub = 0;
//         var ship = 2;

//         var tongTien = 0;
//         var tienShip = 0;
//         var data = card[key];
//         console.log(data);
//         tongTien += `parseFloat(${data.price};
//         tienShip+ = parseFloat(${data.price/100*2};
//         sub += parseFloat(${data.price}+(${data.price}/100*paraeFloat(ship)));  
//        `;
//         document.getElementById("money_ship").innerHTML += tienShip;
//         document.getElementById("money").innerHTML += tongTien;
//         document.getElementById("sub").innerHTML += tongTien;

//     }
// }

var deleteProduct = function (i) {
    card.splice(i, 1);
    localStorage.setItem('ListCard', JSON.stringify(card));
    window.location.reload();

}
var buyProduct = function (i) {
    var k = infor[i];
    document.getElementById("ten").value = k.name;
    document.getElementById("named").value = k.name;
    document.getElementById("num").value = k.number;
    document.getElementById("add").value = k.address;;
}