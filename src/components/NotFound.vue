<template>
  <div class="not-found">
    <div class="container">
      <img src="../assets/img/not-found.svg">
      <h1 contenteditable class="display-3 text-center title-sm">{{context}} :(</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-found",
  data: function() {
    return {
      context: "Halaman tidak ada"
    };
  }
};
</script>

<style>
img {
  display: inline-block;
  margin-left: 350px;
  height: 400px;
  padding: -20px 0;
}

@media (max-width: 400px) {
  img {
    width: 300px;
    margin-left: 35px;
  }
}
</style>

