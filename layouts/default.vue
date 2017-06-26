<template>
  <div class="app">
    <main-header/>
    <nuxt/>
    <main-footer/>
  </div>
</template>

<script>
import MainFooter from '~components/Footer.vue'
import MainHeader from '~components/Header.vue'

export default {
  components: {
    MainFooter,
    MainHeader
  }
}
</script>

<style>
.container
{
  margin: 0;
}
.app
{
  max-width: 1024px;
  margin: 0 auto;
}
</style>
