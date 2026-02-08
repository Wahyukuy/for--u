// GANTI NOMOR WA KAMU DI SINI (Gunakan kode negara 62)
const nomorWA = "628123456789"; 

// Fungsi bikin tombol "Tidak" kabur-kaburan
function lariLari() {
    const btn = document.getElementById('btnTidak');
    
    // Menghitung posisi acak di layar browser
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    // Paksa pindah posisi secara instan
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fungsi kalau dia tekan "Mau"
function terimaKasih() {
    const pesan = encodeURIComponent("Aku mau jadi pacar kamu! ❤️✨");
    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    
    alert("Ciee! Pilihan yang tepat! I Love You! ❤️");
    window.location.href = url;
}

// Fungsi membuat animasi love jatuh
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
