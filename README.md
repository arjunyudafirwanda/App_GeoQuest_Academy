# GeoQuest Academy v1.0

**Explore the world. Decode the planet.**

GeoQuest Academy adalah game edukasi geografi berbasis web untuk peserta didik SMP usia 13–16 tahun. Pemain berperan sebagai penjelajah yang menyelesaikan 20 misi investigasi mengenai peta, wilayah Indonesia, iklim dan ekosistem, geografi manusia, serta mitigasi bencana.

## Menjalankan aplikasi

1. Ekstrak folder `GeoQuest_Academy_v1.0`.
2. Buka folder tersebut menggunakan Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi Live Server.
4. Masukkan nama dan usia 13–16 tahun.
5. Pilih misi dari Peta Eksplorasi.

Aplikasi berjalan di browser dan tidak membutuhkan backend, database, Python, maupun API key. Koneksi internet diperlukan untuk memuat Google Fonts dan Font Awesome CDN; tampilan tetap menggunakan fallback jika layanan tersebut tidak tersedia.

## Fitur

- Profil pemain berdasarkan kombinasi nama dan usia.
- Penentuan jenjang otomatis: usia 13 = kelas VII, 14 = kelas VIII, 15–16 = kelas IX.
- 20 misi dalam lima zona geografi.
- Pemilihan misi dari peta setiap kali pemain login.
- Penyimpanan progres, percobaan, skor, streak, penalti, dan bintang per pemain serta per misi.
- Pemulihan misi ketika dipilih kembali.
- Empat pilihan jawaban per misi.
- Skor berdasarkan percobaan: 100, 70, 40, atau 20 poin.
- Bonus streak 25 poin setiap tiga jawaban benar pertama berturut-turut.
- Penalti maksimal 20 poin setelah tiga jawaban salah berturut-turut pada misi yang sama.
- Dark mode dan light mode.
- Layout responsif dan dukungan `prefers-reduced-motion`.

## Struktur folder

```text
GeoQuest_Academy_v1.0/
├── index.html
├── README.md
├── PANDUAN_MISI.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   └── missions.js
    └── images/
        ├── logo.svg
        └── favicon.svg
```

## Penyimpanan data

Data pemain disimpan di `localStorage` pada browser dan perangkat yang sama. Kunci profil menggunakan nama yang dinormalisasi dan usia. Progres tidak tersinkron ke perangkat lain. Menghapus data situs/browser dapat menghapus riwayat.

Kunci penyimpanan: `geoquest-academy-player-profiles-v1`.

## Mekanisme misi

- Misi dibuka secara berurutan. Misi berikutnya terbuka setelah misi sebelumnya selesai.
- Misi yang telah selesai bisa dibuka kembali untuk membaca jawaban dan penjelasan, tetapi tidak memberikan skor penyelesaian kedua kali.
- Misi yang belum selesai menyimpan jumlah percobaan dan rangkaian jawaban salah.
- Tiga jawaban salah beruntun memicu penalti maksimal 20 poin; jumlah pengurangan tidak dapat melebihi skor pemain.
- Pemain selalu melihat peta misi setelah login. Sistem tidak otomatis membuka misi terakhir.

## Teknologi

HTML5, CSS3, Vanilla JavaScript, SVG, localStorage, Google Fonts, dan Font Awesome CDN.

## Kredit

Designed & Developed by Arjun Yuda Firwanda.
