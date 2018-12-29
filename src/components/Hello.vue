<template>
  <div class="hello">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-2">Landing Page Web {{profil}}</h1>
        <hr class="mx-3">
        <p class="lead">Selamat datang di {{profil}}, semoga lekas jadi deadline kita cuman 1 bulan.</p>
      </div>
    </div>

    <!-- bagian ini untuk menampilkan konten berupa informasi ringan -->
    <!-- informasi awal -->
    <div class="container">
      <div class="row py-4">
        <div class="col-lg-4 py-2" v-for="info in informasi" :key="info.id">
          <h3 class="text-center">{{info.judul}}</h3>
          <p class="text-muted">{{info.deskripsi}}</p>
        </div>
      </div>
    </div>
    <!-- informasi akhir -->
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      profil: "Profile Sekolah Dasar",
      informasi: [
        {
          id: 1,
          judul: "Prestasi",
          deskripsi: "SD ini selalu berpartisipasi pada ajang lomba nasional"
        },
        {
          id: 2,
          judul: "Pendaftaran",
          deskripsi: "Pendaftaran SD akan diadakan setiap tahunnya"
        },
        {
          id: 3,
          judul: "Ramadhan",
          deskripsi:
            "Setiap bulan Ramadhan, SD ini selalu mengadakan acara bazar tiap 2 pekan pertama bulan Ramadhan"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
