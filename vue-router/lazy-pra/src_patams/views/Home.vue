<template>
  <div>
    <div class="home">
      <router-link to="/home/masklist">Home</router-link> |
      <router-link to="'/home/infolist/' + id">InfoList</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data(){
    return {
      id: 'test'
    }
  }
}
</script>
