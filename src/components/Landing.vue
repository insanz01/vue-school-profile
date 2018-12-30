<template>
  <div class="landing">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3 title-sm tebal">Landing Page Web {{profil}}</h1>
        <hr class="mx-3">
        <p
          class="lead p-sm text-muted"
        >Selamat datang di {{profil}}, semoga lekas jadi deadline kita cuman 1 semester.</p>
      </div>
    </div>

    <!-- bagian ini untuk menampilkan konten berupa informasi ringan -->
    <!-- awal informasi -->
    <div class="container">
      <div class="row py-4">
        <div class="col-lg-4 py-3" v-for="info in informasi" :key="info.id">
          <h3 class="text-center" :class="efekAnimasi">{{info.judul}}</h3>
          <p class="text-muted text-center" :class="efekAnimasi">{{info.deskripsi}}</p>
        </div>
      </div>
    </div>
    <!-- akhir informasi -->
    <!-- awal visi dan misi -->
    <div class="container">
      <hr class="mx-4">
      <div class="row my-5">
        <!-- visi sekolah -->
        <div class="col-lg-12 py-3">
          <h2 class="text-center" :class="efekAnimasi">VISI</h2>
          <p class="text-center lead text-muted" :class="efekAnimasi">{{visi}}</p>
        </div>
        <!-- misi sekolah -->
        <div class="col-lg-12 py-3">
          <h2 class="text-center" :class="efekAnimasi">MISI</h2>
          <p class="text-center lead text-muted" :class="efekAnimasi">{{misi}}</p>
        </div>
      </div>
    </div>
    <!-- akhir visi dan misi -->
    <!-- awal alamat dan kontak -->
    <div class="container">
      <hr class="mx-4">
      <div class="row my-5">
        <div class="col-lg-6">
          <h3 class="tebal" :class="efekAnimasi">Alamat Kami</h3>
          <p class="lead text-muted" :class="efekAnimasi">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quae unde dignissimos, quibusdam fugit aperiam facere accusantium magni
            fuga sit nihil perspiciatis omnis facilis itaque sunt,
            expedita voluptatem reprehenderit minus sequi.
          </p>
        </div>
        <div class="col-lg-6 garis-kiri">
          <h3 class="tebal" :class="efekAnimasi">Kontak Kami</h3>
          <p class="lead text-muted" :class="efekAnimasi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa, vero rerum atque recusandae sed reiciendis!
            Impedit harum deserunt optio necessitatibus dolorum, corrupti vitae excepturi.
            Iure voluptas quas magni sunt fuga?
          </p>
        </div>
      </div>
    </div>
    <!-- akhir alamat dan kontak -->
  </div>
</template>

<script>
export default {
  name: "landing",
  data() {
    return {
      profil: "Profile Sekolah Dasar",
      visi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ratione cum minima libero recusandae ullam voluptates nisi vero dicta veritatis explicabo tempore? Velit amet voluptas odit, delectus modi porro quos.",
      misi:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ratione cum minima libero recusandae ullam voluptates nisi vero dicta veritatis explicabo tempore? Velit amet voluptas odit, delectus modi porro quos.",
      informasi: [
        {
          id: 1,
          judul: "Prestasi",
          deskripsi: "SD kita selalu berpartisipasi pada ajang lomba nasional"
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
            "Setiap bulan Ramadhan, SD kita selalu mengadakan acara bazar tiap 2 pekan pertama bulan Ramadhan"
        }
      ],
      efekAnimasi: "wow fadeInUp"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tebal {
  font-weight: bold !important;
}

.garis-kiri {
  border-left: 1px solid grey;
}

/* .jumbotron {
  background: url("../assets/img/nasa.jpg") no-repeat center center;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: cover;
} */
</style>
