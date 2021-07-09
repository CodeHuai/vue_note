<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :selectAll="selectAll" :clearCompletedTodos="clearCompletedTodos"/>
      <hr>
    </div>
  </div>
</template>


<script>
  import Header from './components/Header/Header.vue';
  import List from './components/List/List.vue';
  import Footer from './components/Footer/Footer.vue';

  export default {
    name: 'App',

    data () {
      return {
        todos: [
          {id: 1, title: 'A', completed: false},
          {id: 3, title: 'B', completed: true},
          {id: 5, title: 'C', completed: false},
        ]
      }
    },

    // 数据在哪个组件, 更新数据的行为(函数)就定义在哪个组件
    methods: {
      // 添加todo
      addTodo (todo) {
        // 创建一个新的id, 并给todo
        todo.id = Date.now();
        // 添加到todos中
        this.todos.unshift(todo);
      },

      // 删除todo
      deleteTodo (index) {
        this.todos.splice(index, 1);
      },

      // 全选或全不选
      selectAll(isCheck) {
        this.todos.forEach(todo => todo.completed = isCheck);
      },

      // 消除已完成的
      clearCompletedTodos () {
        console.log('clearCompletedTodos()');
        this.todos = this.todos.filter(todo => !todo.completed);
      }
    },

    components: {
      Header,
      List,
      Footer
    }
  }
</script>


<style scoped>
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