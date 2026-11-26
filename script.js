// 1. KONFIGURASI TAILWIND FONT
if (window.tailwind) {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Plus Jakarta Sans', 'sans-serif'],
        },
      },
    },
  };
}

// 2. PENANGANAN FALLBACK GAMBAR LOKAL (UTK UTAMA: sertif.jpg)
window.missingImages = new Set();
window.resolvedUtkSrc = 'sertif.jpg';
const utkCandidates = ['sertif.utk', 'sertif.utk.jpg', 'sertif.utk.jpeg', 'sertif.utk.png'];
let utkTryIndex = 0;

window.handleImageFallback = function (imgElement, filename) {
  window.missingImages.add(filename);
  imgElement.classList.add('hidden');
  const fallbackBox = imgElement.parentElement && imgElement.parentElement.querySelector('.fallback-box');
  if (fallbackBox) {
    fallbackBox.classList.remove('hidden');
    fallbackBox.classList.add('flex');
  }
};

window.handleUtkFallback = function (imgElement) {
  if (utkTryIndex < utkCandidates.length) {
    const nextSrc = utkCandidates[utkTryIndex++];
    window.resolvedUtkSrc = nextSrc;
    if (window.galleryItems) {
      const utkItem = window.galleryItems.find((item) => item.id === 'utk');
      if (utkItem) utkItem.src = nextSrc;
    }
    imgElement.src = nextSrc;
  } else {
    window.resolvedUtkSrc = 'sertif.jpg';
    if (window.galleryItems) {
      const utkItem = window.galleryItems.find((item) => item.id === 'utk');
      if (utkItem) utkItem.src = 'sertif.jpg';
    }
    window.handleImageFallback(imgElement, 'sertif.jpg');
  }
};

// 3. KAMUS DUA BAHASA (INDONESIA & ENGLISH)
const translations = {
  id: {
    navAbout: 'Tentang Saya',
    navProjects: 'Projek',
    navSkills: 'Skill',
    navCertificates: 'Sertifikat',
    navContact: 'Kontak',
    heroWelcome: 'Selamat Datang di Portofolio Saya',
    heroSubtitle: 'Siswi SMKN 1 Blitar • Anggota Paskibra Berprestasi (15 Sertifikat Kejuaraan) • Pengembang Aplikasi Kasir & Database',
    ctaCertificates: 'Lihat 16 Sertifikat',
    ctaProjects: 'Lihat Projek',
    tapPhotoHint: 'Klik foto untuk tampilan penuh',
    clickFullHint: 'Klik untuk lihat full',
    viewFullShort: 'Lihat Full',
    viewFullBtn: 'Lihat Foto Full',
    aboutTag: 'Profil Singkat',
    aboutTitle: 'Tentang Saya',
    aboutText: 'Halo! Saya Alysa Nisfi Mauran, siswi SMKN 1 Blitar sekaligus anggota Paskibra yang aktif berkompetisi dan telah meraih 15 sertifikat kejuaraan. Saya memadukan kedisiplinan, kerja sama tim, dan ketelitian dalam setiap proyek yang saya kerjakan.',
    statSchool: 'Sekolah',
    statPaskibra: 'Paskibra',
    statPaskibraVal: '15 Kejuaraan',
    projectsTag: 'Karya & Aplikasi',
    projectsTitle: 'Projek Saya',
    projectBadge: 'Aplikasi Desktop / Web',
    projectKasirTitle: 'Aplikasi Kasir',
    projectKasirDesc: 'Sistem aplikasi kasir untuk mencatat transaksi penjualan, menghitung total pembayaran dan kembalian secara otomatis, serta mengelola data barang dengan cepat dan akurat.',
    projectDbBadge: 'Sistem Basis Data',
    projectDbTitle: 'Database',
    projectDbDesc: 'Perancangan struktur tabel, relasi data, serta pengelolaan basis data terstruktur untuk mendukung penyimpanan informasi dan pencatatan transaksi secara rapi dan efisien.',
    skillsTag: 'Kemampuan',
    skillsTitle: 'Skill Saya',
    certTag: 'Pencapaian & Penghargaan',
    certTitle: 'Sertifikat Saya',
    certClickInfo: 'Klik pada sertifikat mana pun untuk melihat foto penuh',
    utkBadge: 'Sertifikasi Kompetensi',
    utkTitle: 'Sertifikat UTK (Uji Terampil / Kompetensi)',
    utkDesc: 'Sertifikat bukti kelulusan dan pencapaian kompetensi resmi. Klik gambar untuk menampilkan dokumen sertifikat secara penuh.',
    paskibraGridTitle: '15 Sertifikat Kejuaraan Paskibra',
    certCardLabel: 'Sertifikat Kejuaraan Paskibra',
    contactTag: 'Hubungi Saya',
    contactTitle: 'Kontak Pribadi',
    contactSubtitle: 'Terhubung dengan saya melalui Instagram pribadi atau kirim pesan langsung melalui email di bawah ini.',
    igLabel: 'Instagram Pribadi',
    igHint: 'Klik untuk membuka profil Instagram',
    emailHint: 'Klik untuk kirim email',
    footerText: 'Siswi SMKN 1 Blitar • Portofolio Pribadi',
    lightboxHint: 'Gunakan tombol panah kiri/kanan atau geser untuk melihat foto lainnya • ESC untuk menutup',
    lightboxFallbackMsg: 'File gambar lokal ini akan tampil penuh secara otomatis saat file HTML ini disimpan dalam satu folder bersama file gambar tersebut.',
    toastCopied: 'Alamat email berhasil disalin!',
  },
  en: {
    navAbout: 'About Me',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navCertificates: 'Certificates',
    navContact: 'Contact',
    heroWelcome: 'Welcome to My Portfolio',
    heroSubtitle: 'Student at SMKN 1 Blitar • Accomplished Paskibra Member (15 Championship Certificates) • Cashier App & Database Developer',
    ctaCertificates: 'View 16 Certificates',
    ctaProjects: 'View Projects',
    tapPhotoHint: 'Click photo for full view',
    clickFullHint: 'Click to view full',
    viewFullShort: 'View Full',
    viewFullBtn: 'View Full Photo',
    aboutTag: 'Short Profile',
    aboutTitle: 'About Me',
    aboutText: 'Hello! I am Alysa Nisfi Mauran, a student at SMKN 1 Blitar and an active Paskibra member who has competed and earned 15 championship certificates. I bring discipline, teamwork, and precision into every project I build.',
    statSchool: 'School',
    statPaskibra: 'Paskibra',
    statPaskibraVal: '15 Championships',
    projectsTag: 'Works & Applications',
    projectsTitle: 'My Projects',
    projectBadge: 'Desktop / Web App',
    projectKasirTitle: 'Cashier Application',
    projectKasirDesc: 'A point-of-sale cashier application designed to record sales transactions, automatically calculate totals and change, and manage product inventory quickly and accurately.',
    projectDbBadge: 'Database System',
    projectDbTitle: 'Database',
    projectDbDesc: 'Structured relational table design and database management to organize information and transaction records cleanly and efficiently.',
    skillsTag: 'Capabilities',
    skillsTitle: 'My Skills',
    certTag: 'Achievements & Awards',
    certTitle: 'My Certificates',
    certClickInfo: 'Click on any certificate to view the full photo',
    utkBadge: 'Competency Certification',
    utkTitle: 'UTK Certificate (Competency Assessment)',
    utkDesc: 'Official competency assessment certificate. Click the image to inspect the full certificate document.',
    paskibraGridTitle: '15 Paskibra Championship Certificates',
    certCardLabel: 'Paskibra Championship Certificate',
    contactTag: 'Get in Touch',
    contactTitle: 'Personal Contact',
    contactSubtitle: 'Connect with me through my personal Instagram or send a direct message via email below.',
    igLabel: 'Personal Instagram',
    igHint: 'Click to open Instagram profile',
    emailHint: 'Click to send an email',
    footerText: 'Student of SMKN 1 Blitar • Personal Portfolio',
    lightboxHint: 'Use left/right arrow keys or swipe to browse photos • Press ESC to close',
    lightboxFallbackMsg: 'This local image file will automatically appear in full size when this HTML file is saved in the same folder as the image.',
    toastCopied: 'Email address copied to clipboard!',
  },
};

// 4. DATA SKILL (HANYA LIST - TANPA PERSENTASE)
const skillsData = [
  {
    icon: 'calculator',
    id: { title: 'Pengembangan Aplikasi Kasir', desc: 'Perancangan alur transaksi penjualan dan perhitungan kasir' },
    en: { title: 'Cashier App Development', desc: 'Designing sales transaction workflows and cashier calculations' },
  },
  {
    icon: 'database',
    id: { title: 'Manajemen Database & Data', desc: 'Pengelolaan tabel produk, stok barang, dan laporan transaksi' },
    en: { title: 'Database & Data Management', desc: 'Managing product tables, stock records, and transaction reports' },
  },
  {
    icon: 'code-2',
    id: { title: 'Pemrograman & Logika Dasar', desc: 'Penyusunan struktur kode yang rapi dan mudah dipahami' },
    en: { title: 'Programming & Core Logic', desc: 'Writing clean and structured application logic' },
  },
  {
    icon: 'shield-check',
    id: { title: 'Kedisiplinan & Kepemimpinan Paskibra', desc: 'Ketegasan, ketepatan waktu, dan tanggung jawab tinggi' },
    en: { title: 'Paskibra Discipline & Leadership', desc: 'Punctuality, focus, and strong sense of responsibility' },
  },
  {
    icon: 'users',
    id: { title: 'Kerja Sama Tim (Teamwork)', desc: 'Koordinasi solid dalam perlombaan maupun pengerjaan projek' },
    en: { title: 'Teamwork & Collaboration', desc: 'Solid coordination in competitions and project development' },
  },
  {
    icon: 'file-spreadsheet',
    id: { title: 'Administrasi & Microsoft Office', desc: 'Pengolahan dokumen, laporan kegiatan, dan data administrasi' },
    en: { title: 'Administration & Microsoft Office', desc: 'Document processing, activity reports, and administrative data' },
  },
];

let currentLang = 'id';

// 5. DAFTAR GALERI FOTO FULL-SCREEN LIGHTBOX (19 ITEM)
const galleryItems = [
  { id: 'pp', src: 'pp.jpeg', titleId: 'Foto Profil — Alysa Nisfi Mauran', titleEn: 'Profile Photo — Alysa Nisfi Mauran' },
  { id: 'kasir', src: 'kasir.png', titleId: 'Projek: Aplikasi Kasir', titleEn: 'Project: Cashier Application' },
  { id: 'database', src: 'databse.jpeg', titleId: 'Projek: Database', titleEn: 'Project: Database' },
  { id: 'utk', src: window.resolvedUtkSrc || 'sertif.jpg', titleId: 'Sertifikat UTK', titleEn: 'UTK Certificate' },
];

for (let i = 1; i <= 15; i++) {
  galleryItems.push({
    id: `paski-${i}`,
    src: `${i}.jpg`,
    titleId: `Sertifikat Kejuaraan Paskibra #${i}`,
    titleEn: `Paskibra Championship Certificate #${i}`,
  });
}

window.galleryItems = galleryItems;

// 6. RENDER GRID 15 SERTIFIKAT PASKIBRA (1.jpg - 15.jpg)
function renderPaskibraCertificates() {
  const grid = document.getElementById('paskibra-grid');
  if (!grid) return;
  grid.innerHTML = '';

  for (let i = 1; i <= 15; i++) {
    const filename = `${i}.jpg`;
    const card = document.createElement('button');
    card.type = 'button';
    card.onclick = () => openLightboxById(`paski-${i}`);
    card.setAttribute('aria-label', `Lihat Sertifikat Kejuaraan Paskibra #${i} full`);
    card.className = 'group glass-card glass-card-hover rounded-2xl p-2.5 sm:p-3 text-left flex flex-col gap-2.5 focus:outline-none focus:ring-4 focus:ring-sky-300';

    card.innerHTML = `
      <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-sky-50/90 border border-sky-200/80">
        <img
          src="${filename}"
          alt="Sertifikat Kejuaraan Paskibra ${i}"
          loading="lazy"
          class="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
          onerror="handleImageFallback(this, '${filename}')"
        />
        <div class="fallback-box hidden flex-col items-center justify-center w-full h-full p-2 text-center bg-gradient-to-br from-sky-100 via-white to-cyan-100">
          <svg class="w-7 h-7 text-sky-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
          <span class="font-mono font-bold text-[11px] text-sky-800">${filename}</span>
        </div>
        <div class="absolute inset-0 bg-sky-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="px-2.5 py-1 rounded-full bg-white text-sky-700 text-[11px] font-bold shadow">
            ${translations[currentLang].viewFullShort}
          </span>
        </div>
      </div>
      <div class="px-1 flex items-center justify-between gap-1">
        <div class="min-w-0">
          <span class="text-[11px] font-bold text-sky-600 block">#${String(i).padStart(2, '0')}</span>
          <p class="font-display font-bold text-xs sm:text-sm text-slate-800 truncate">${translations[currentLang].certCardLabel}</p>
        </div>
        <span class="text-[10px] font-mono text-slate-400 shrink-0">${filename}</span>
      </div>
    `;

    grid.appendChild(card);
  }
}

// 7. RENDER LIST SKILL (TANPA PERSENTASE)
function renderSkills() {
  const list = document.getElementById('skills-list');
  if (!list) return;
  list.innerHTML = '';

  skillsData.forEach((skill) => {
    const content = skill[currentLang];
    const li = document.createElement('li');
    li.className = 'p-4 sm:p-5 rounded-2xl bg-sky-50/80 hover:bg-sky-100/80 border border-sky-200/80 transition-colors flex items-start gap-3.5';
    li.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
        <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
      </div>
      <div>
        <h3 class="font-display font-bold text-sm sm:text-base text-slate-900">${content.title}</h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">${content.desc}</p>
      </div>
    `;
    list.appendChild(li);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

// 8. GANTI BAHASA (ID / EN)
window.setLanguage = function (lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnId && btnEn) {
    if (lang === 'id') {
      btnId.className = 'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 bg-sky-500 text-white shadow-sm';
      btnEn.className = 'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-sky-700 hover:text-sky-900';
    } else {
      btnEn.className = 'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 bg-sky-500 text-white shadow-sm';
      btnId.className = 'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-sky-700 hover:text-sky-900';
    }
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const hintEl = document.getElementById('lightbox-hint');
  if (hintEl) hintEl.textContent = translations[lang].lightboxHint;

  const fallbackMsgEl = document.getElementById('lightbox-fallback-msg');
  if (fallbackMsgEl) fallbackMsgEl.textContent = translations[lang].lightboxFallbackMsg;

  renderSkills();
  renderPaskibraCertificates();

  const modal = document.getElementById('lightbox-modal');
  if (modal && !modal.classList.contains('hidden')) {
    updateLightboxContent();
  }
};

// 9. FITUR FULL-SCREEN LIGHTBOX
let currentLightboxIndex = 0;
let isLightboxZoomed = false;

window.openLightboxById = function (id) {
  const idx = galleryItems.findIndex((item) => item.id === id);
  if (idx !== -1) {
    currentLightboxIndex = idx;
    openLightbox();
  }
};

function openLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  resetLightboxZoom();
  updateLightboxContent();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide) {
    lucide.createIcons();
  }
}

window.closeLightbox = function () {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  resetLightboxZoom();
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
};

function resetLightboxZoom() {
  isLightboxZoomed = false;
  const imgEl = document.getElementById('lightbox-img');
  const zoomIcon = document.getElementById('lightbox-zoom-icon');
  if (imgEl) {
    imgEl.classList.remove('max-w-none', 'max-h-none', 'scale-125', 'sm:scale-150', 'cursor-zoom-out');
    imgEl.classList.add('max-w-full', 'max-h-[80vh]', 'cursor-zoom-in');
  }
  if (zoomIcon) {
    zoomIcon.setAttribute('data-lucide', 'zoom-in');
    if (window.lucide) lucide.createIcons();
  }
}

window.toggleLightboxZoom = function () {
  const imgEl = document.getElementById('lightbox-img');
  if (!imgEl || imgEl.classList.contains('hidden')) return;

  isLightboxZoomed = !isLightboxZoomed;
  const zoomIcon = document.getElementById('lightbox-zoom-icon');

  if (isLightboxZoomed) {
    imgEl.classList.remove('max-w-full', 'max-h-[80vh]', 'cursor-zoom-in');
    imgEl.classList.add('max-w-none', 'max-h-none', 'scale-125', 'sm:scale-150', 'cursor-zoom-out');
    if (zoomIcon) zoomIcon.setAttribute('data-lucide', 'zoom-out');
  } else {
    resetLightboxZoom();
    return;
  }

  if (window.lucide) lucide.createIcons();
};

window.navigateLightbox = function (step) {
  currentLightboxIndex = (currentLightboxIndex + step + galleryItems.length) % galleryItems.length;
  resetLightboxZoom();
  updateLightboxContent();
};

function updateLightboxContent() {
  const item = galleryItems[currentLightboxIndex];
  const titleEl = document.getElementById('lightbox-title');
  const fileEl = document.getElementById('lightbox-filename');
  const counterEl = document.getElementById('lightbox-counter');
  const imgEl = document.getElementById('lightbox-img');
  const fallbackEl = document.getElementById('lightbox-fallback');
  const fallbackFileEl = document.getElementById('lightbox-fallback-file');

  titleEl.textContent = currentLang === 'id' ? item.titleId : item.titleEn;
  fileEl.textContent = item.src;
  counterEl.textContent = `${currentLightboxIndex + 1} / ${galleryItems.length}`;
  fallbackFileEl.textContent = item.src;

  if (window.missingImages.has(item.src)) {
    imgEl.classList.add('hidden');
    fallbackEl.classList.remove('hidden');
    fallbackEl.classList.add('flex');
  } else {
    fallbackEl.classList.add('hidden');
    fallbackEl.classList.remove('flex');
    imgEl.classList.remove('hidden');
    imgEl.src = item.src;
    imgEl.alt = titleEl.textContent;
    imgEl.onerror = () => {
      window.missingImages.add(item.src);
      imgEl.classList.add('hidden');
      fallbackEl.classList.remove('hidden');
      fallbackEl.classList.add('flex');
    };
  }
}

// 10. SALIN EMAIL & NOTIFIKASI TOAST
window.copyEmailAddress = function () {
  const email = document.getElementById('email-address-text').textContent.trim();
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(translations[currentLang].toastCopied);
  } catch (err) {
    showToast(email);
  }
  document.body.removeChild(tempInput);
};

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('flex');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 2800);
}

window.closeMobileMenu = function () {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
};

// 11. INISIALISASI SAAT HALAMAN SELESAI DIMUAT
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('id');

  if (window.lucide) {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close Lightbox on Backdrop Click
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox-modal' || e.target.id === 'lightbox-stage') {
        closeLightbox();
      }
    });
  }

  // Keyboard Navigation inside Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || lightboxModal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });

  // Touch Swipe inside Lightbox
  let touchStartX = 0;
  const lightboxStage = document.getElementById('lightbox-stage');
  if (lightboxStage) {
    lightboxStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxStage.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 45) {
        navigateLightbox(diff < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  // Scroll Reveal Animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
