<template>
  <div class="about">
    <div class="container">
      <h1 class="display-3 tebal title-sm text-center py-5">{{judul}}</h1>
      <div class="container">
        <p class="text-center text-muted p-sm">{{detail}} {{detail}} {{detail}}</p>
        <p class="text-center text-muted p-sm">{{detail}} {{detail}} {{detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      judul: "Tentang Sekolah Kami",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque laudantium eum, quae consequuntur animi quis dolores tempora vitae veniam illum magni. Quo facilis numquam magni, molestias quos porro quasi!"
    };
  }
};
</script>

<style>
.tebal {
  font-weight: bold !important;
}

@media (max-width: 400px) {
  .title-sm {
    font-size: 2em !important;
  }

  .p-sm {
    font-size: 0.9em !important;
  }
}
</style>

