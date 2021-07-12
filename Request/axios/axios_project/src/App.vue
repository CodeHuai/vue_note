<template>
  <div>
    <h2 v-if="!repoName">LOADING...</h2>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
        repoName: '', //仓库名称
        repoUrl: '', // 仓库地址
    }
  },
  mounted () {
    axios.get('https://api.github.com/search/repositories?q=r&sort=stars')
    .then(response=>{
      // console.log(response.data.items[0]);
      const {html_url, name} = response.data.items[0];
      this.repoName = name;
      this.repoUrl = html_url;
    })
    .catch(error =>{
      console.log(error);
    });
  },
  components: {
  }
}
</script>

<style>

</style>
