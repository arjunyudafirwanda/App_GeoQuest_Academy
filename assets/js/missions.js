(() => {
  "use strict";
  window.GEOQUEST_MISSIONS = [
    {
      id: 1,
      zone: 1,
      zoneName: "Map & Spatial Skills",
      zoneIcon: "fa-map-location-dot",
      title: "Legenda Peta Misterius",
      tag: "Membaca simbol",
      intro:
        "Tim ekspedisi menemukan peta sebuah kawasan. Sebelum bergerak, kamu harus memahami simbol yang digunakan agar tidak salah memilih lokasi.",
      clue: "Pada legenda peta tertulis: garis biru = sungai, garis hitam putus-putus = jalan setapak, dan segitiga merah = puncak gunung.",
      concept:
        "Legenda adalah keterangan yang menjelaskan arti simbol-simbol pada peta. Simbol membantu menyederhanakan informasi lokasi.",
      question:
        "Pada peta, tim melihat simbol segitiga merah. Lokasi apakah yang ditunjukkan simbol tersebut?",
      options: [
        "Puncak gunung",
        "Aliran sungai",
        "Jalan setapak",
        "Batas kecamatan",
      ],
      answer: 0,
      explanation:
        "Segitiga merah telah dijelaskan dalam legenda sebagai simbol puncak gunung. Membaca legenda harus dilakukan sebelum menafsirkan simbol.",
    },
    {
      id: 2,
      zone: 1,
      zoneName: "Map & Spatial Skills",
      zoneIcon: "fa-map-location-dot",
      title: "Koordinat Penjelajah",
      tag: "Lintang dan bujur",
      intro:
        "Kamu menerima titik koordinat dari pos pengamatan. Tantangannya adalah memahami garis lintang dan garis bujur untuk menemukan posisi yang tepat.",
      clue: "Garis lintang diukur dari khatulistiwa ke utara atau selatan. Garis bujur diukur dari meridian utama ke timur atau barat.",
      concept:
        "Koordinat geografis ditulis menggunakan lintang dan bujur. Lintang menunjukkan posisi utara–selatan, sedangkan bujur menunjukkan posisi timur–barat.",
      question: "Sebuah lokasi berada pada 6° LS dan 106° BT. Apa arti 6° LS?",
      options: [
        "Enam derajat di selatan khatulistiwa",
        "Enam derajat di utara khatulistiwa",
        "Enam derajat di timur meridian utama",
        "Enam derajat di barat meridian utama",
      ],
      answer: 0,
      explanation:
        "LS berarti Lintang Selatan, sehingga lokasi berada 6 derajat di selatan garis khatulistiwa.",
    },
    {
      id: 3,
      zone: 1,
      zoneName: "Map & Spatial Skills",
      zoneIcon: "fa-map-location-dot",
      title: "Misi Skala Peta",
      tag: "Jarak sebenarnya",
      intro:
        "Peta perjalanan menunjukkan jarak antara dua pos. Kamu perlu menghitung jarak sebenarnya agar tim dapat memperkirakan waktu perjalanan.",
      clue: "Skala 1 : 100.000 berarti setiap 1 cm pada peta mewakili 100.000 cm atau 1 km di lapangan.",
      concept:
        "Skala membandingkan jarak pada peta dengan jarak sebenarnya. Samakan satuan sebelum menghitung.",
      question:
        "Pada peta berskala 1 : 100.000, jarak dua desa adalah 4 cm. Berapa jarak sebenarnya?",
      options: ["400 meter", "4 kilometer", "40 kilometer", "400 kilometer"],
      answer: 1,
      explanation: "1 cm pada peta = 1 km sebenarnya. Jadi 4 cm × 1 km = 4 km.",
    },
    {
      id: 4,
      zone: 1,
      zoneName: "Map & Spatial Skills",
      zoneIcon: "fa-map-location-dot",
      title: "Arah Mata Angin",
      tag: "Orientasi peta",
      intro:
        "Kamu berada di titik observasi. Peta menunjukkan bahwa danau berada di sebelah timur, sementara bukit berada di sebelah utara.",
      clue: "Pada peta dengan orientasi standar, utara berada di bagian atas, timur di kanan, selatan di bawah, dan barat di kiri.",
      concept:
        "Arah mata angin membantu menjelaskan letak relatif suatu tempat terhadap tempat lain.",
      question:
        "Jika kamu menghadap ke utara, arah timur berada di sebelah mana?",
      options: ["Kiri", "Belakang", "Kanan", "Depan"],
      answer: 2,
      explanation:
        "Saat menghadap utara, timur berada di sebelah kanan dan barat di sebelah kiri.",
    },
    {
      id: 5,
      zone: 2,
      zoneName: "Indonesia & Its Regions",
      zoneIcon: "fa-earth-asia",
      title: "Negeri Kepulauan",
      tag: "Karakteristik Indonesia",
      intro:
        "Kapal riset berlayar melewati gugusan pulau. Kamu diminta menjelaskan mengapa Indonesia disebut negara kepulauan.",
      clue: "Indonesia terdiri atas ribuan pulau yang tersebar di antara Samudra Hindia dan Samudra Pasifik serta di antara Benua Asia dan Australia.",
      concept:
        "Negara kepulauan memiliki wilayah yang terdiri atas banyak pulau dan perairan yang menghubungkannya.",
      question: "Alasan utama Indonesia disebut negara kepulauan adalah ...",
      options: [
        "Seluruh wilayahnya berupa daratan",
        "Terdiri atas banyak pulau yang dipisahkan dan dihubungkan oleh perairan",
        "Tidak memiliki wilayah laut",
        "Hanya memiliki satu pulau besar",
      ],
      answer: 1,
      explanation:
        "Indonesia memiliki ribuan pulau dan wilayah laut yang luas, sehingga dikenal sebagai negara kepulauan.",
    },
    {
      id: 6,
      zone: 2,
      zoneName: "Indonesia & Its Regions",
      zoneIcon: "fa-earth-asia",
      title: "Letak Astronomis Indonesia",
      tag: "Lintang dan bujur Indonesia",
      intro:
        "Sebuah tim membuat profil geografis Indonesia untuk atlas sekolah. Kamu harus mengenali letak astronomis dan pengaruh umumnya.",
      clue: "Secara umum, Indonesia terletak sekitar 6° LU–11° LS dan 95° BT–141° BT.",
      concept:
        "Letak astronomis ditentukan berdasarkan garis lintang dan garis bujur. Letak lintang berpengaruh terhadap iklim, sedangkan bujur berkaitan dengan pembagian waktu.",
      question:
        "Indonesia berada di sekitar garis lintang 6° LU sampai 11° LS. Hal ini menunjukkan bahwa Indonesia berada di sekitar wilayah ...",
      options: [
        "Kutub Utara",
        "Kutub Selatan",
        "Garis khatulistiwa",
        "Lingkar Arktik",
      ],
      answer: 2,
      explanation:
        "Rentang lintang tersebut berada di sekitar khatulistiwa, sehingga sebagian besar Indonesia beriklim tropis.",
    },
    {
      id: 7,
      zone: 2,
      zoneName: "Indonesia & Its Regions",
      zoneIcon: "fa-earth-asia",
      title: "Mengenal Zona Waktu",
      tag: "WIB, WITA, WIT",
      intro:
        "Kamu mengatur konferensi daring antara teman di Jakarta, Makassar, dan Jayapura. Perbedaan waktu harus diperhitungkan.",
      clue: "WIB adalah UTC+7, WITA UTC+8, dan WIT UTC+9. WITA satu jam lebih cepat daripada WIB.",
      concept:
        "Indonesia memiliki tiga zona waktu. Wilayah yang berada lebih ke timur menggunakan waktu yang lebih cepat.",
      question:
        "Jika di Jakarta (WIB) pukul 09.00, pukul berapa di Makassar (WITA)?",
      options: ["08.00", "09.00", "10.00", "11.00"],
      answer: 2,
      explanation:
        "WITA satu jam lebih cepat daripada WIB. Jadi pukul 09.00 WIB sama dengan pukul 10.00 WITA.",
    },
    {
      id: 8,
      zone: 2,
      zoneName: "Indonesia & Its Regions",
      zoneIcon: "fa-earth-asia",
      title: "Membaca Bentuk Muka Bumi",
      tag: "Relief dan topografi",
      intro:
        "Peta topografi menunjukkan garis-garis kontur yang menggambarkan ketinggian permukaan bumi. Kamu harus menentukan bagian yang paling terjal.",
      clue: "Garis kontur yang berdekatan menunjukkan perubahan ketinggian yang cepat pada jarak pendek. Garis yang berjauhan menunjukkan lereng lebih landai.",
      concept:
        "Peta topografi menggunakan garis kontur untuk menggambarkan relief atau tinggi-rendah permukaan bumi.",
      question:
        "Pada peta topografi, garis kontur tampak sangat rapat. Apa yang dapat disimpulkan?",
      options: [
        "Daerah tersebut cenderung curam",
        "Daerah tersebut selalu datar",
        "Daerah tersebut pasti berupa laut",
        "Daerah tersebut tidak memiliki perbedaan tinggi",
      ],
      answer: 0,
      explanation:
        "Kontur rapat menunjukkan perubahan elevasi yang besar dalam jarak horizontal pendek, sehingga lereng cenderung curam.",
    },
    {
      id: 9,
      zone: 3,
      zoneName: "Climate & Ecosystems",
      zoneIcon: "fa-cloud-sun",
      title: "Cuaca atau Iklim?",
      tag: "Memahami atmosfer",
      intro:
        "Dalam laporan pengamatan, seorang teman menulis bahwa hujan sore ini membuktikan iklim daerah telah berubah. Apakah kesimpulan itu tepat?",
      clue: "Cuaca menggambarkan kondisi atmosfer dalam waktu singkat. Iklim merupakan pola rata-rata kondisi cuaca dalam jangka panjang.",
      concept:
        "Cuaca dan iklim berkaitan, tetapi berbeda pada rentang waktu pengamatannya.",
      question: "Pernyataan 'hujan deras terjadi sore ini' menggambarkan ...",
      options: [
        "Iklim",
        "Cuaca",
        "Musim tahunan",
        "Perubahan iklim jangka panjang",
      ],
      answer: 1,
      explanation:
        "Hujan yang terjadi pada sore tertentu merupakan kondisi atmosfer jangka pendek, yaitu cuaca.",
    },
    {
      id: 10,
      zone: 3,
      zoneName: "Climate & Ecosystems",
      zoneIcon: "fa-cloud-sun",
      title: "Angin Muson dan Musim",
      tag: "Pola musim Indonesia",
      intro:
        "Petani ingin memperkirakan awal musim hujan. Kamu diminta menjelaskan hubungan angin muson dengan pola musim di Indonesia.",
      clue: "Angin muson barat umumnya membawa banyak uap air dari lautan dan berkaitan dengan musim hujan di sebagian besar Indonesia.",
      concept:
        "Angin muson berubah arah secara berkala dan memengaruhi pola musim di wilayah tropis, termasuk Indonesia.",
      question:
        "Angin muson barat umumnya membawa banyak uap air sehingga berkaitan dengan ...",
      options: [
        "Musim salju",
        "Musim hujan",
        "Musim gugur",
        "Cuaca selalu kering",
      ],
      answer: 1,
      explanation:
        "Angin muson barat melewati perairan luas dan membawa uap air, sehingga umumnya berkaitan dengan musim hujan di Indonesia.",
    },
    {
      id: 11,
      zone: 3,
      zoneName: "Climate & Ecosystems",
      zoneIcon: "fa-cloud-sun",
      title: "Penjaga Ekosistem Mangrove",
      tag: "Ekosistem pesisir",
      intro:
        "Desa pesisir mengalami abrasi dan kehilangan habitat biota. Tim lingkungan mengusulkan pemulihan hutan mangrove.",
      clue: "Akar mangrove membantu menahan sedimen, mengurangi energi gelombang, dan menyediakan habitat bagi berbagai organisme pesisir.",
      concept:
        "Ekosistem mangrove merupakan ekosistem pesisir yang penting bagi perlindungan pantai dan keanekaragaman hayati.",
      question: "Mengapa hutan mangrove penting untuk wilayah pesisir?",
      options: [
        "Mempercepat abrasi pantai",
        "Menghilangkan seluruh biota laut",
        "Membantu mengurangi abrasi dan menjadi habitat biota",
        "Mengubah air laut menjadi air tawar",
      ],
      answer: 2,
      explanation:
        "Mangrove membantu meredam gelombang, menahan sedimen, dan menjadi tempat hidup berbagai organisme.",
    },
    {
      id: 12,
      zone: 3,
      zoneName: "Climate & Ecosystems",
      zoneIcon: "fa-cloud-sun",
      title: "Keanekaragaman Hayati",
      tag: "Spesies endemik",
      intro:
        "Kamu membaca laporan tentang satwa yang secara alami hanya ditemukan di wilayah tertentu. Tim meminta contoh dan makna istilah endemik.",
      clue: "Komodo merupakan satwa endemik Indonesia yang hidup alami di beberapa pulau di Nusa Tenggara Timur.",
      concept:
        "Spesies endemik adalah spesies yang persebaran alaminya terbatas pada wilayah geografis tertentu.",
      question: "Apa arti spesies endemik?",
      options: [
        "Spesies yang hidup di seluruh dunia",
        "Spesies yang hanya ditemukan secara alami di wilayah tertentu",
        "Spesies yang selalu bermigrasi setiap musim",
        "Spesies yang sudah tidak memiliki habitat",
      ],
      answer: 1,
      explanation:
        "Endemik berarti persebaran alami suatu spesies terbatas pada wilayah tertentu.",
    },
    {
      id: 13,
      zone: 4,
      zoneName: "People & Places",
      zoneIcon: "fa-people-group",
      title: "Menghitung Kepadatan Penduduk",
      tag: "Rasio penduduk dan luas",
      intro:
        "Dua kecamatan memiliki jumlah penduduk berbeda. Kamu diminta menghitung kepadatan untuk membantu perencanaan fasilitas umum.",
      clue: "Kepadatan penduduk = jumlah penduduk ÷ luas wilayah. Satuan yang umum digunakan adalah jiwa per kilometer persegi.",
      concept:
        "Kepadatan penduduk menunjukkan banyaknya penduduk pada setiap satuan luas wilayah.",
      question:
        "Sebuah kecamatan memiliki 12.000 penduduk dan luas 60 km². Berapa kepadatan penduduknya?",
      options: ["20 jiwa/km²", "120 jiwa/km²", "200 jiwa/km²", "720 jiwa/km²"],
      answer: 2,
      explanation: "12.000 ÷ 60 = 200. Jadi kepadatannya 200 jiwa per km².",
    },
    {
      id: 14,
      zone: 4,
      zoneName: "People & Places",
      zoneIcon: "fa-people-group",
      title: "Dinamika Urbanisasi",
      tag: "Perpindahan penduduk",
      intro:
        "Sebuah kota berkembang karena banyak penduduk desa pindah untuk bekerja dan belajar. Kamu diminta mengidentifikasi proses tersebut.",
      clue: "Urbanisasi adalah perpindahan penduduk dari desa ke kota. Faktor pendorong dan penarik dapat meliputi pekerjaan, pendidikan, serta fasilitas.",
      concept:
        "Perpindahan penduduk memengaruhi persebaran, kepadatan, kebutuhan perumahan, transportasi, dan layanan publik.",
      question: "Perpindahan penduduk dari desa menuju kota disebut ...",
      options: [
        "Urbanisasi",
        "Transmigrasi antarbenua",
        "Evakuasi bencana",
        "Reboisasi",
      ],
      answer: 0,
      explanation:
        "Urbanisasi adalah perpindahan penduduk dari wilayah perdesaan ke wilayah perkotaan.",
    },
    {
      id: 15,
      zone: 4,
      zoneName: "People & Places",
      zoneIcon: "fa-people-group",
      title: "Ragam Budaya Nusantara",
      tag: "Keragaman dan ruang",
      intro:
        "Pameran sekolah menampilkan rumah adat, bahasa, tarian, dan kuliner dari berbagai daerah. Kamu diminta menjelaskan mengapa keragaman budaya dapat terbentuk.",
      clue: "Kondisi kepulauan, sejarah, lingkungan alam, interaksi antarkelompok, dan perjalanan masyarakat ikut membentuk keragaman budaya.",
      concept:
        "Geografi manusia mempelajari hubungan manusia, budaya, aktivitas, dan ruang tempat mereka hidup.",
      question:
        "Salah satu faktor geografis yang ikut membentuk keragaman budaya Indonesia adalah ...",
      options: [
        "Semua daerah memiliki lingkungan yang sama persis",
        "Indonesia terdiri atas banyak pulau dengan kondisi lingkungan dan sejarah yang beragam",
        "Seluruh penduduk tinggal di satu kota",
        "Tidak pernah terjadi interaksi antardaerah",
      ],
      answer: 1,
      explanation:
        "Kondisi kepulauan dan lingkungan yang beragam, bersama sejarah dan interaksi masyarakat, ikut membentuk kekayaan budaya Indonesia.",
    },
    {
      id: 16,
      zone: 4,
      zoneName: "People & Places",
      zoneIcon: "fa-people-group",
      title: "Membaca Persebaran Permukiman",
      tag: "Pola ruang",
      intro:
        "Kamu mengamati citra wilayah. Rumah-rumah penduduk terlihat berjajar mengikuti jalan dan sungai. Pola permukiman apa yang paling sesuai?",
      clue: "Permukiman memanjang atau linear sering berkembang mengikuti unsur geografis seperti jalan, sungai, garis pantai, atau lembah.",
      concept:
        "Pola permukiman dipengaruhi bentuk lahan, akses transportasi, sumber air, kegiatan ekonomi, dan sejarah wilayah.",
      question:
        "Rumah-rumah berjajar mengikuti jalan utama membentuk pola permukiman ...",
      options: [
        "Memanjang atau linear",
        "Melingkar konsentris selalu",
        "Tersebar acak tanpa pola",
        "Bertingkat vertikal seluruhnya",
      ],
      answer: 0,
      explanation:
        "Pola linear tampak ketika bangunan mengikuti jalur memanjang seperti jalan atau sungai.",
    },
    {
      id: 17,
      zone: 5,
      zoneName: "Disaster & Sustainability",
      zoneIcon: "fa-house-tsunami",
      title: "Mengenali Gempa Tektonik",
      tag: "Pergerakan lempeng",
      intro:
        "Sensor mencatat getaran kuat di sebuah wilayah dekat batas lempeng. Tim perlu memahami penyebab umum gempa tektonik.",
      clue: "Gempa tektonik terjadi akibat pelepasan energi ketika batuan mengalami tekanan dan bergeser pada patahan, sering berkaitan dengan pergerakan lempeng tektonik.",
      concept:
        "Bumi memiliki lempeng-lempeng litosfer yang bergerak. Interaksi lempeng dapat memicu gempa dan aktivitas geologi lainnya.",
      question: "Penyebab utama gempa tektonik adalah ...",
      options: [
        "Perubahan warna awan",
        "Pelepasan energi akibat pergeseran batuan pada patahan",
        "Pergantian siang dan malam",
        "Pasang surut air laut biasa",
      ],
      answer: 1,
      explanation:
        "Gempa tektonik berkaitan dengan pelepasan energi akibat pergerakan atau pergeseran batuan pada patahan.",
    },
    {
      id: 18,
      zone: 5,
      zoneName: "Disaster & Sustainability",
      zoneIcon: "fa-house-tsunami",
      title: "Aman Saat Erupsi Gunung Api",
      tag: "Mitigasi vulkanik",
      intro:
        "Pusat informasi mengumumkan peningkatan aktivitas gunung api. Warga diminta mengikuti arahan resmi dan bersiap menghadapi kemungkinan evakuasi.",
      clue: "Saat status dan arahan resmi mengharuskan evakuasi, warga harus mengikuti jalur evakuasi, menjauhi zona bahaya, dan menggunakan masker untuk mengurangi paparan abu.",
      concept:
        "Mitigasi bencana mengurangi risiko melalui kesiapsiagaan, informasi tepercaya, rencana evakuasi, dan tindakan sesuai arahan petugas.",
      question:
        "Jika petugas resmi memerintahkan evakuasi karena bahaya erupsi, tindakan terbaik adalah ...",
      options: [
        "Mendekati kawah untuk melihat kondisi",
        "Mengikuti jalur evakuasi dan arahan petugas",
        "Menyebarkan kabar yang belum terverifikasi",
        "Bertahan di zona bahaya tanpa perlindungan",
      ],
      answer: 1,
      explanation:
        "Ikuti arahan otoritas, gunakan jalur evakuasi, dan jauhi kawasan berbahaya. Jangan mendekati gunung untuk melihat erupsi.",
    },
    {
      id: 19,
      zone: 5,
      zoneName: "Disaster & Sustainability",
      zoneIcon: "fa-house-tsunami",
      title: "Mengurangi Risiko Banjir",
      tag: "Pengelolaan daerah aliran sungai",
      intro:
        "Permukiman di sekitar sungai sering mengalami genangan setelah hujan deras. Tim warga mencari langkah yang dapat mengurangi risiko banjir.",
      clue: "Daerah resapan, vegetasi, drainase yang terawat, tidak membuang sampah ke sungai, dan penataan ruang membantu mengelola limpasan air.",
      concept:
        "Risiko banjir dipengaruhi curah hujan, kondisi daerah aliran sungai, tutupan lahan, kapasitas drainase, dan paparan permukiman.",
      question:
        "Kombinasi tindakan yang paling membantu mengurangi limpasan air hujan di lingkungan adalah ...",
      options: [
        "Menutup seluruh tanah dengan beton",
        "Membuang sampah ke saluran air",
        "Menambah ruang resapan dan menjaga saluran drainase",
        "Menebang seluruh pohon di bantaran sungai",
      ],
      answer: 2,
      explanation:
        "Ruang resapan membantu air meresap ke tanah, sedangkan drainase yang terawat membantu mengalirkan air. Keduanya perlu didukung tata ruang yang baik.",
    },
    {
      id: 20,
      zone: 5,
      zoneName: "Disaster & Sustainability",
      zoneIcon: "fa-house-tsunami",
      title: "Membuat Peta Risiko",
      tag: "Pemetaan dan kesiapsiagaan",
      intro:
        "Sekolah ingin membuat peta sederhana untuk menunjukkan titik kumpul, jalur evakuasi, dan lokasi yang berpotensi tergenang.",
      clue: "Peta risiko menggabungkan informasi bahaya, lokasi penduduk atau fasilitas, serta jalur aman. Peta harus memiliki legenda, arah, dan informasi yang jelas.",
      concept:
        "Pemetaan risiko membantu masyarakat memahami lokasi yang perlu diwaspadai dan merencanakan tindakan pengurangan risiko.",
      question:
        "Informasi paling penting yang harus dicantumkan pada peta evakuasi sekolah adalah ...",
      options: [
        "Warna favorit seluruh siswa",
        "Titik kumpul, jalur evakuasi, dan area berbahaya",
        "Daftar makanan kantin",
        "Jadwal pelajaran setiap kelas",
      ],
      answer: 1,
      explanation:
        "Peta evakuasi harus menunjukkan rute aman, titik kumpul, dan area yang perlu dihindari agar dapat digunakan saat keadaan darurat.",
    },
  ];
})();
