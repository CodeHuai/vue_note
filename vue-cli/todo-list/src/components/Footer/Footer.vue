<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize>0" @click="clearCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    todos: Array,
    selectAll: Function,
    clearCompletedTodos: Function
  },

  computed: {
    // 完成的数量
    completeSize () {
      return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
    },

    // 是否全选
    isSelectAll: {
      // 确定是否勾选
      get () {
        return this.todos.length === this.completeSize
      },
      // 当改变勾选状态时调用, value为当前是否勾选的状态
      set (value) {
        this.selectAll(value)
      }
    }

  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
