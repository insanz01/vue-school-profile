<template>
  <div id="app">
    <!-- awal header -->
    <header>
      <a class="navbar-brand text-white bawah-dikit kanan-dikit" href="/">{{name}} PWA</a>
      <nav class="navbar navbar-expand-lg navbar-light bg-light float-right">
        <!-- <div class="collapse navbar-collapse"> -->
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link text-white" href="/">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Profil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Galeri</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/about">Tentang</a>
          </li>
        </ul>
        <!-- </div> -->
      </nav>
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
        <p class="lead text-center">&copy; {{tahun}} - {{developer}}</p>
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
      name: "Web Sekolah",
      developer: "Amanda Fahmidyna"
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
  color: aqua !important;
}

.navbar-brand:hover {
  color: aquamarine !important;
}

/* ini warna theme default 4DBA87 */
</style>
