// 1. GANTI NOMOR WA DI SINI (Contoh: 628123456789)
const nomorWA = "6281356154664"; 

// Fungsi membuat hati berjatuhan
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// Fungsi butang "Tidak" lari secara random
function lariLari() {
    const btn = document.getElementById('btnTidak');
    // Cari posisi random dalam window skrin
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'fixed'; // Pastikan dia lari merata skrin
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fungsi bila butang "Mau" diklik
function terimaKasih() {
    const pesan = encodeURIComponent("Aku mau jadi pacar kamu! ❤️✨");
    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    
    alert("Keputusan yang bijak! I Love You! ❤️");
    window.location.href = url;
}
