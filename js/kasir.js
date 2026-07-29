let barang = JSON.parse(localStorage.getItem("barang")) || [];

let pilih = document.getElementById("produk");

barang.forEach((item, index) => {

    pilih.innerHTML +=
    `<option value="${index}">
        ${item.nama} - Rp${item.harga}
    </option>`;

});

function hitungTotal(){

    let index = pilih.value;

    let jumlah =
    Number(document.getElementById("jumlah").value);

    if(index==="Pilih Produk"){
        alert("Pilih produk dulu!");
        return;
    }

    let total =
    barang[index].harga * jumlah;

    document.getElementById("total").innerHTML =
    "Total: Rp" + total.toLocaleString("id-ID");

}
