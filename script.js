let totalSemua = 0;

function tambahBarang() {
  let nama = document.getElementById("namaBarang").value;
  let harga = parseInt(document.getElementById("harga").value);
  let qty = parseInt(document.getElementById("qty").value);

  if (!nama || !harga || !qty) {
    alert("Isi semua data!");
    return;
  }

  let subtotal = harga * qty;
  totalSemua += subtotal;

  let row = `
    <tr>
      <td>${nama}</td>
      <td>Rp ${harga.toLocaleString("id-ID")}</td>
      <td>${qty}</td>
      <td>Rp ${subtotal.toLocaleString("id-ID")}</td>
    </tr>
  `;

  document.getElementById("listBarang").innerHTML += row;

  document.getElementById("total").innerText =
    "Total: Rp " + totalSemua.toLocaleString("id-ID");

  // reset input setelah tambah
  document.getElementById("namaBarang").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("qty").value = "";
}

function resetSemua() {
  document.getElementById("listBarang").innerHTML = "";
  totalSemua = 0;
  document.getElementById("total").innerText = "Total: Rp 0";
}