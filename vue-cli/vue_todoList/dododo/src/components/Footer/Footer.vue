<template>
  <div class="todo-footer">
      <label>
          <input ref="oIn" type="checkbox" v-model="seleceAll"/>
      </label>
      <span>
          <span>已完成{{selectCount}}</span> / 全部{{todos.length}}
      </span>
      <!-- 注意 这里的  removeFinishTodo 是调用函数  -->
      <button class="btn btn-danger" v-show="selectCount>0" @click="removeFinishTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
      todos: Array,
      removeFinishTodo: Function,
      isSelectAll: Function
    },
    computed: {
      // 控制 footer中 选中删除按钮是否显示
      selectCount(){
        return this.todos.reduce((init, pre)=>{
          return init += pre.isChecked? 1: 0;
        }, 0);
      },
      seleceAll:{
        get(){
          // 当选中数量为空时，设为未选中，同时禁用
          if(!this.todos.length){
            // 设为禁用
            console.log(this.$refs.oIn.disable);
            return false;
          }
          else if(this.todos.length === this.selectCount){
            // 当选中的数量等于todos的长度时，为选中状态
            return true;
          }
        },
        set(value){
          this.isSelectAll(value);
        }
      }
    }
}
</script>

<style scope>
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