<template>
  <div id="app">
    <div class="container">
      <PackagesList />
    </div>

    <Footer />

  </div>
</template>

<script>
import PackagesList from './components/PackagesList.vue';
import Footer from './components/base/FooterComponent';
export default {
  name: "App",
  components: {
    PackagesList,
    Footer
  }
};
</script>

<style lang="scss"></style>
