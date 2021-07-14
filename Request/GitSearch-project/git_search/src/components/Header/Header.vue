<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model.trim="searchInfo"/>
            <button @click.prevent="subInfo">Search</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            searchInfo: ''
        }
    },
    methods: {
        subInfo(){
            if(this.searchInfo){
                this.$bus.$emit('getResult', this.searchInfo);
            }
        }
    }
}
</script>

<style scoped>

</style>