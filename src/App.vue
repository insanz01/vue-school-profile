<template>
  <div id="app">
    <!-- awal header -->
    <header>
      <span>{{name}} PWA</span>
    </header>
    <!-- akhir header -->
    <!-- awal konten utama -->
    <main>
      <router-view></router-view>
    </main>
    <!-- akhir konten utama -->
    <!-- awal bagian copyright -->
    <footer>
      <div class="py-5">
        <p class="lead text-center">&copy; {{tahun}} Amanda Fahmidyna</p>
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
      name: "Web Sekolah"
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

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
