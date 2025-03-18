        // Data berita
        const newsData = [
            {
                id: 1,
                category: 'Nasional',
                title: 'Pemerintah Luncurkan Program Bantuan Pendidikan Untuk Daerah Terpencil',
                excerpt: 'Program ini bertujuan untuk meningkatkan akses pendidikan di daerah terpencil dan membantu siswa dari keluarga kurang mampu.',
                date: '15 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/sekolah.webp'
            },
            {
                id: 2,
                category: 'Teknologi',
                title: 'Perusahaan Teknologi Besar Rilis Smartphone Terbaru dengan Fitur AI Canggih',
                excerpt: 'Smartphone ini dilengkapi dengan teknologi kecerdasan buatan yang dapat memprediksi kebutuhan pengguna.',
                date: '14 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/Ai.jpeg'
            },
            {
                id: 3,
                category: 'Ekonomi',
                title: 'Nilai Tukar Rupiah Menguat Terhadap Dolar Amerika',
                excerpt: 'Bank sentral menyatakan bahwa penguatan ini dipengaruhi oleh membaiknya kondisi ekonomi dalam negeri.',
                date: '13 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images//Stonk.webp'
            },
            {
                id: 4,
                category: 'Olahraga',
                title: 'Tim Nasional Sepakbola Berhasil Lolos ke Babak Kualifikasi Piala Dunia',
                excerpt: 'Kemenangan ini menjadi prestasi penting bagi tim nasional setelah bertahun-tahun tidak lolos ke babak kualifikasi.',
                date: '12 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/sepakbola.jpg'
            },
            {
                id: 5,
                category: 'Internasional',
                title: 'PBB Gelar Konferensi Perubahan Iklim dengan Fokus pada Energi Terbarukan',
                excerpt: 'Negara-negara anggota berkomitmen untuk mengurangi emisi karbon dan mengembangkan sumber energi terbarukan.',
                date: '11 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/renewable.jpg'
            },
            {
                id: 6,
                category: 'Nasional',
                title: 'Kementerian Kesehatan Lakukan Kampanye Vaksinasi Besar-besaran',
                excerpt: 'Kampanye ini bertujuan untuk meningkatkan imunitas masyarakat dan mencegah penyebaran penyakit menular.',
                date: '10 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/Vacsine.jpg'
            },
            {
                id: 7,
                category: 'Teknologi',
                title: 'Peneliti Kembangkan Teknologi Baru untuk Penyimpanan Energi',
                excerpt: 'Teknologi ini diklaim dapat menyimpan energi dalam jumlah besar dengan biaya yang lebih rendah.',
                date: '9 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/Researcher.jpeg'
            },
            {
                id: 8,
                category: 'Hiburan',
                title: 'Film Karya Sutradara Indonesia Raih Penghargaan di Festival Film Internasional',
                excerpt: 'Film tersebut mendapatkan pujian atas kualitas sinematografi dan kedalaman narasinya.',
                date: '8 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/movie-award.jpg'
            },
            {
                id: 9,
                category: 'Ekonomi',
                title: 'Bank Nasional Turunkan Suku Bunga Acuan',
                excerpt: 'Penurunan suku bunga ini diharapkan dapat mendorong pertumbuhan ekonomi dan investasi.',
                date: '7 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/not stonk.jpeg'
            },
            {
                id: 10,
                category: 'Olahraga',
                title: 'Atlet Muda Indonesia Pecahkan Rekor Nasional di Kejuaraan Renang',
                excerpt: 'Prestasi ini menjadi semangat baru bagi perkembangan olahraga renang di Indonesia.',
                date: '6 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/atlet.jpg'
            },
            {
                id: 11,
                category: 'Internasional',
                title: 'Negara-negara G20 Sepakat Tingkatkan Kerja Sama Ekonomi',
                excerpt: 'Pertemuan ini menghasilkan sejumlah komitmen untuk mengatasi tantangan ekonomi global.',
                date: '5 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/g20.jpg'
            },
            {
                id: 12,
                category: 'Hiburan',
                title: 'Konser Musik Amal Kumpulkan Dana untuk Korban Bencana',
                excerpt: 'Acara yang dihadiri berbagai musisi ternama ini sukses mengumpulkan dana bantuan.',
                date: '4 Maret 2025',
                author: 'Saya sendiri',
                image: 'Frontend/images/conser.jpg'
            }
        ];

        // Variabel untuk mengontrol pagination
        let currentPage = 1;
        const newsPerPage = 6;
        let currentCategory = 'Semua';
        let currentSearchTerm = '';

        // Fungsi untuk menampilkan berita
        function displayNews(page = 1, category = 'Semua', searchTerm = '') {
            const newsGrid = document.getElementById('news-grid');
            
            // Jika page=1 (halaman pertama), kosongkan grid
            if (page === 1) {
                newsGrid.innerHTML = '';
            }

            // Filter berita berdasarkan kategori dan pencarian
            let filteredNews = newsData;
            
            if (category !== 'Semua') {
                filteredNews = filteredNews.filter(news => news.category === category);
            }
            
            if (searchTerm !== '') {
                filteredNews = filteredNews.filter(news => 
                    news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Hitung berita yang akan ditampilkan
            const startIndex = (page - 1) * newsPerPage;
            const endIndex = startIndex + newsPerPage;
            const newsToDisplay = filteredNews.slice(startIndex, endIndex);

            // Tampilkan pesan jika tidak ada hasil
            if (newsToDisplay.length === 0 && page === 1) {
                newsGrid.innerHTML = '<p class="no-results">Tidak ada berita yang ditemukan.</p>';
                document.getElementById('load-more').style.display = 'none';
                return;
            }

            // Tampilkan berita
            newsToDisplay.forEach(news => {
                const newsCard = document.createElement('div');
                newsCard.className = 'news-card';
                newsCard.innerHTML = `
                    <div class="news-image" style="background-image: url('${news.image}'); background-size: cover; background-position: center;"></div>
                    <div class="news-content">
                        <span class="news-category">${news.category}</span>
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <div class="news-meta">
                            <span>${news.date}</span>
                            <span>Oleh: ${news.author}</span>
                        </div>
                    </div>
                `;
                newsGrid.appendChild(newsCard);
            });

            // Tampilkan atau sembunyikan tombol "Muat Lebih Banyak"
            const loadMoreButton = document.getElementById('load-more');
            if (endIndex >= filteredNews.length) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'block';
            }
        }

        // Event listener untuk tombol kategori
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Hapus kelas active dari semua tombol
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Tambahkan kelas active ke tombol yang diklik
                this.classList.add('active');
                
                // Update variabel dan tampilkan berita
                currentCategory = this.getAttribute('data-category');
                currentPage = 1;
                displayNews(currentPage, currentCategory, currentSearchTerm);
            });
        });

        // Event listener untuk tombol pencarian
        document.getElementById('search-button').addEventListener('click', function() {
            const searchInput = document.getElementById('search-input');
            currentSearchTerm = searchInput.value.trim();
            currentPage = 1;
            displayNews(currentPage, currentCategory, currentSearchTerm);
        });

        // Event listener untuk input pencarian (enter key)
        document.getElementById('search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                currentSearchTerm = this.value.trim();
                currentPage = 1;
                displayNews(currentPage, currentCategory, currentSearchTerm);
            }
        });

        // Event listener untuk tombol "Muat Lebih Banyak"
        document.getElementById('load-more').addEventListener('click', function() {
            currentPage++;
            displayNews(currentPage, currentCategory, currentSearchTerm);
        });

        // Fungsi untuk breaking news
        function setupBreakingNews() {
            const breakingNewsText = document.getElementById('breaking-text');
            const breakingNews = [
                'Gempa bumi berkekuatan 6,2 magnitudo mengguncang wilayah timur negara',
                'Vaksin Covid-19 baru telah mendapatkan izin penggunaan darurat',
                'Perundingan damai antara dua negara yang bertikai mencapai kemajuan signifikan',
                'Harga bahan bakar diperkirakan akan turun minggu depan',
                'Atlet nasional berhasil meraih medali emas di kejuaraan internasional'
            ];

            let currentIndex = 0;
            
            function rotateBreakingNews() {
                breakingNewsText.textContent = breakingNews[currentIndex];
                currentIndex = (currentIndex + 1) % breakingNews.length;
            }
            
            // Ganti breaking news setiap 10 detik
            setInterval(rotateBreakingNews, 60000);
        }

        // Inisialisasi halaman
        window.addEventListener('DOMContentLoaded', function() {
            // Tampilkan berita
            displayNews();
            
            // Setup breaking news
            setupBreakingNews();
        });