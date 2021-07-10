<template>
<div class="todo-header">
    <input type="text" v-model="title" @keyup.enter="handleEnter" placeholder="请输入你的任务名称，按回车键确认"/>
</div>
</template>

<script>
export default {
    name: 'Header',
    // 用以记录 输入数据
    data(){
      return {
        title: ''
      }
    },
    methods: {
      handleEnter(){
        // 注意这里的 trim 是方法
        let title = this.title.trim();
        // 如果为空
        if(!title){
          this.title = '';
          return;
        }
        // 如果不为空
        // 创建 新的todo对象
        const todo = {
          id: this.setIdWithUUID(),
          title,
          isChecked: false
        }
        // this.addTodo(todo);
        this.$emit('addTodo', todo);
        //  清空输入
        this.title = '';
      }
    },
    props: {
      setIdWithUUID: Function
    }
}
</script>

<style scope>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>