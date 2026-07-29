function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau Password salah!");
    }
}
function simpanBarang() {

let nama = document.getElementById("nama").value;
let harga = document.getElementById("harga").value;
let stok = document.getElementById("stok").value;

let barang = JSON.parse(localStorage.getItem("barang")) || [];

barang.push({
    nama: nama,
    harga: harga,
    stok: stok
});

localStorage.setItem("barang", JSON.stringify(barang));

alert("Barang berhasil disimpan!");

document.getElementById("nama").value = "";
document.getElementById("harga").value = "";
document.getElementById("stok").value = "";

}
