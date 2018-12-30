<template>
  <div id="app">
    <!-- awal header -->
    <header>
      <a class="navbar-brand text-white bawah-dikit kanan-dikit" href="/">{{namaSekolah}} PWA</a>
      <!-- awal navigasi menu -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light float-right">
        <ul class="nav">
          <!-- halaman beranda berupa landing page -->
          <!-- berupa informasi singkat mengenai sekolahan -->
          <li class="nav-item">
            <a class="nav-link text-white" href="/">Beranda</a>
          </li>
          <!-- halaman profil merupakan informasi detail mengenai sekolahan -->
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Profil</a>
          </li>
          <!-- halaman galeri merupakan kumpulan foto / album mengenai sekolahan -->
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Galeri</a>
          </li>
          <!-- halaman tentang merupakan informasi tentang sekolahan secara selayang pandang -->
          <li class="nav-item">
            <a class="nav-link text-white" href="/about">Tentang</a>
          </li>
        </ul>
      </nav>
      <!-- akhir navigasi menu -->
    </header>
    <!-- akhir header -->
    <!-- awal konten utama -->
    <main>
      <router-view></router-view>
    </main>
    <!-- akhir konten utama -->
    <!-- awal bagian copyright -->
    <footer>
      <div class="py-3">
        <p class="lead text-center" :class="efekAnimasi">&copy; {{tahun}} - {{pengembang}}</p>
      </div>
    </footer>
    <!-- akhir bagian copyright -->
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      namaSekolah: "Web Sekolah",
      pengembang: "Amanda Fahmidyna",
      efekAnimasi: "wow fadeInUp"
    };
  },
  computed: {
    // untuk generate tahun sekarang secara realtime
    tahun: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

.bawah-dikit {
  margin-top: 10px !important;
}

.kanan-dikit {
  margin-left: 10px !important;
}

header {
  background-color: #252525;
  padding: 6px;
}

.nav-link:hover {
  color: aquamarine !important;
}

.navbar-brand:hover {
  color: aquamarine !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  cursor: default;
}

@media (max-width: 400px) {
  .title-sm {
    font-size: 2em !important;
  }

  .p-sm {
    font-size: 0.9em !important;
  }
}

/* ini warna theme default 4DBA87 */
</style>
