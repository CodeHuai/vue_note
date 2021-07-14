<template>
    <div>
        <div v-if="isEmpty">请输入关键字进行搜索</div>
        <div v-else-if="hasRequest">请求加载中...</div>

        <div v-if="errorMsg">{{errorMsg}}</div>
        <div class="row" v-else>
            <div class="card">
                <a href="https://github.com/reactjs" target="_blank">
                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
                </a>
                <p class="card-text">reactjs</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Main',
    data(){
        return {
            isEmpty: true,
            hasRequest: false,
            errorMsg: ''
        }
    },
    created () {
        this.$bus.$on('getResult', this.getResult);
    },
    methods: {
        getResult(searchInfo){
            this.isEmpty = false;
            this.hasRequest = true;

            axios.get('https://api.github.com/search/users',{
                params: {
                    q: searchInfo
                }
            })
            .then(response=>{
                console.log(response.data);
            })
            .catch(error=>{
                console.log(error);
            });
        }
    }
}
</script>

<style>
    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>