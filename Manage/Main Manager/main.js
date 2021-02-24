function pushID(id) {
    localStorage.setItem('listID', JSON.stringify(id));
    console.log(id);
}

function getID() {
    return JSON.parse(localStorage.getItem('listID'));
}

function pushAccount(preAccount) {
    localStorage.setItem('listAccount', JSON.stringify(preAccount));
}
function getAccount() {
    return JSON.parse(localStorage.getItem('listAccount'));
}

function reLoad() {
    window.location.reload()
}

const login=()=>{
    listAcc=getAccount();

}