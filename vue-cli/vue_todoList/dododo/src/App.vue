<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List :todos='todos'></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import List from './components/List/List.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data(){
    return {
        // 初始时就读取json数据并解析为js的数组, 如果没有指定为空数组
        todos: [
          {id: this.setIdWithTimer, title: '阿拉斯加海湾', isChecked: false},
          {id: this.setIdWithTimer, title: '沉淀', isChecked: false},
          {id: this.setIdWithTimer, title: 'Flower Dance', isChecked: false},
        ]
    }
  },
  methods: {
    setIdWithTimer(){
      return Date.now();
    }
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
