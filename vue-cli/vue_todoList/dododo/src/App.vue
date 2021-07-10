<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo='addTodo' :setIdWithUUID='setIdWithUUID'></Header>
      <List :todos='todos' :toggleTodo='toggleTodo'></List>
      <Footer :isSelectAll="isSelectAll" :todos='todos' :removeFinishTodo='removeFinishTodo'></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import List from './components/List/List.vue';
import Footer from './components/Footer/Footer.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  mounted(){
    this.$bus.$on('removeSelectTodo', this.removeSelectTodo);
  },
  data(){
    return {
        // 初始时就读取json数据并解析为js的数组, 如果没有指定为空数组
        todos: [
          {id: this.setIdWithUUID(), title: '阿拉斯加海湾', isChecked: false},
          {id: this.setIdWithUUID(), title: '沉淀', isChecked: false},
          {id: this.setIdWithUUID(), title: 'Flower Dance', isChecked: false},
        ]
    }
  },
  // 原则： 数据在哪个页面，那么相关的操作就要和该页面进行绑定
  methods: {
    // 通过UUID作为唯一的 id
    setIdWithUUID(){
      return uuidv4().split('-').join('');
    },
    // 定义添加的方法 todo -- 为用户添加的数据
    addTodo(todo){
      this.todos.unshift(todo);
    },
    // 删除选中的 todo
    removeSelectTodo(todo){
      this.todos.splice(todo.id, 1);
    },
    // 消除已完成的 todo
    removeFinishTodo(){
      this.todos = this.todos.filter(item=>{
        return !item.isChecked;
      });
      // 当全部删除时，将 全选按钮置为 false

    },
    // 将一个指定的todo切换勾选状态
    toggleTodo (todo) {
      todo.isChecked = !todo.isChecked
    },
    // 控制全选按钮
    isSelectAll(flag){
      this.todos.forEach(item=>{
        item.isChecked = flag;
      });
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
