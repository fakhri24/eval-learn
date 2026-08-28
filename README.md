# Evaluasi Pembelajaran Matematika 📐

Aplikasi web responsif untuk evaluasi pembelajaran materi matematika dan performa pengajaran guru di kelas. Terintegrasi langsung dengan **Google Firebase Cloud Firestore** untuk penyimpanan database dan dilengkapi dengan **Dashboard Rekap Guru / Admin** serta fitur **Ekspor CSV**.

---

## 🌟 Fitur Utama

1. **Formulir Evaluasi Siswa (`index.html`)**:
   - **Informasi Sesi**: Topik materi matematika, kelas/pertemuan, nama siswa, serta opsi **Mode Anonim**.
   - **Penilaian 10 Aspek Pengajaran (Skala 1 - 5)**:
     - ⏱️ *Kecepatan & Waktu*: Kecepatan menjelaskan, Waktu mencatat.
     - 💡 *Kejelasan Konsep*: Kejelasan penurunan rumus, Kerapian papan tulis/slide, Variasi contoh soal bertahap.
     - 📝 *Latihan & Pembahasan*: Kesesuaian tingkat kesulitan latihan, Pembahasan tuntas soal sulit.
     - 🤝 *Interaksi & Pemahaman*: Keterbukaan menjawab pertanyaan, Pengecekan pemahaman berkala, Tingkat pemahaman mandiri siswa.
   - **3 Kolom Essai Terarah**:
     - ⚠️ Masalah & Kendala belajar yang dihadapi
     - 💡 Saran perbaikan untuk guru di sesi berikutnya
     - ✨ Hal positif dan metode yang paling membantu
   - **Penyimpanan Otomatis ke Cloud Firestore**: Data langsung tersimpan secara aman dan real-time.

2. **Dashboard Rekap Guru & Admin (`admin.html`)**:
   - **Proteksi Akses PIN**: Keamanan akses khusus guru/admin (*Default PIN: `guru123`*).
   - **Live KPI Overview**: Total respon, rata-rata skor kelas, aspek paling memuaskan, dan aspek yang perlu perbaikan.
   - **Visual Progress Bar**: Analisis rata-rata nilai dari 10 aspek pengajaran.
   - **Filter & Pencarian Cepat**: Filter berdasarkan Topik, Kelas, atau pencarian teks (nama siswa & isi saran).
   - **Detail Modal**: Melihat lembar evaluasi lengkap per siswa.
   - **📥 Ekspor Data ke CSV**: Kompatibel langsung dengan Microsoft Excel dan Google Sheets (dilengkapi *UTF-8 BOM*).

---

## 🛠️ Arsitektur & Teknologi

- **Frontend**: HTML5, CSS3 Modern, Vanilla JavaScript (ES Modules).
- **Database**: Google Firebase Cloud Firestore (`evaluasi_matematika`).
- **Hosting**: GitHub Pages.

---

## 🚀 Cara Penggunaan

### 1. Membuka di Peramban Lokal
Cukup buka file `index.html` (untuk siswa) atau `admin.html` (untuk guru) langsung di browser apa pun.

### 2. Akses Dashboard Guru (`admin.html`)
- Masukkan PIN: `guru123`
- Setelah login, data evaluasi akan langsung tersinkronisasi.
- Klik tombol **"Unduh Rekap (CSV)"** untuk mengunduh laporan spreadsheet.
