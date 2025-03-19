# README Portal Berita
### Deskripsi
Portal Berita adalah sebuah tugas P-Web yang meminta untuk membuat website portal berita berbahasa Indonesia yang menampilkan artikel-artikel terbaru dari berbagai kategori seperti Nasional, Internasional, Ekonomi, Olahraga, Teknologi, dan Hiburan. Website ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework tambahan.

### Fitur Utama

- Tampilan Responsif - Website dapat menyesuaikan diri dengan berbagai ukuran layar perangkat.
- Breaking News - Fitur berita terkini yang berputar secara otomatis setiap 10 detik.
- Filter Kategori - Pengguna dapat memfilter berita berdasarkan kategori.
- Pencarian - Fitur pencarian untuk menemukan berita berdasarkan judul atau isi.
- Pagination - Tombol "Muat Lebih Banyak" untuk menampilkan berita tambahan.
- Animasi Hover - Efek visual saat pengguna mengarahkan kursor ke kartu berita.

## Struktur Kode
### HTML
Struktur HTML terdiri dari beberapa bagian utama:

<ol>
<li> <header> - Berisi logo dan menu navigasi </li>
<li> <section class="hero"> - Area pencarian dan judul utama </li>
<li> <section class="breaking-news"> - Area berita terkini yang bergerak </li>
<li> <main> - Bagian utama yang menampilkan kartu-kartu berita </li>
<li> <footer> - Informasi kontak, kategori, dan hak cipta </li>
</ol>

### CSS
Gaya visual diatur langsung di dalam file "main.css" dengan beberapa komponen kunci:
<ul>
<li>Layout responsif menggunakan CSS Grid dan Flexbox
<li>Tema warna dengan dominasi biru (#3498db) dan navy (#2c3e50)
<li>Animasi untuk elemen breaking news
<li>Media queries untuk responsivitas pada perangkat mobile
</ul>

### JavaScript
Logika fungsional website diatur oleh JavaScript dengan beberapa fungsi utama:

<ul>
<li> displayNews()- Menampilkan berita berdasarkan filter kategori dan pencarian
<li> Event listener untuk filter kategori, pencarian, dan tombol "Muat Lebih Banyak"
<li> setupBreakingNews() - Mengatur rotasi berita terkini otomatis
</ul>

## Data
Berita disimpan dalam array JavaScript newsData yang berisi objek dengan struktur:
```
{
    id: number,
    category: string,
    title: string,
    excerpt: string,
    date: string,
    author: string,
    image: string
}
```
