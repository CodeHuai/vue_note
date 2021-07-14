<template>
<div id="app">
  <div class="container">
    <Header></Header>
    <Main></Main>
  </div>
</div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';


export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>

</style>
