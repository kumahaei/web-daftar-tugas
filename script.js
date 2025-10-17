// Tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
  
  // Ambil elemen form login
  const form = document.querySelector("form");

  // Saat form dikirim
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Supaya halaman tidak langsung pindah

    // Ambil nilai dari input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Cek apakah kolom kosong
    if (username === "" || password === "") {
      alert("Harap isi semua kolom!");
      return;
    }

    // Simpan nama pengguna di localStorage (sementara)
    localStorage.setItem("username", username);

    // Arahkan ke halaman dashboard
    window.location.href = "dashboard.html";
  });
});
