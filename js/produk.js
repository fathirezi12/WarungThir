
let barang = JSON.parse(localStorage.getItem("barang")) || [];

let list = document.getElementById("listProduk");

if (barang.length === 0) {
    list.innerHTML = "<p>Belum ada produk.</p>";
} else {
    barang.forEach((item) => {
        list.innerHTML += `
        <div style="background:white;padding:15px;margin-bottom:10px;border-radius:10px;">
            <h3>${item.nama}</h3>
            <p>Harga: Rp${item.harga}</p>
            <p>Stok: ${item.stok}</p>
        </div>
        `;
    });
}
