<template>
<li :style="{background: bgColor}" @mouseleave='isShowRemoveBtn(false)' @mouseenter="isShowRemoveBtn(true)">
  <label>
    <input type="checkbox" v-model="isChecked"/>
    <span>{{todo.title}}</span>
  </label>
  <button class="btn btn-danger" @click='removeTodo' v-show='btnFlag'>删除</button>
</li>
</template>

<script>
  export default {
      name: 'Item',
      data(){
        return {
          // 按钮是否显示标识
          btnFlag: false,
          // li 背景颜色改变标识
          bgColor: '#fff'
        }
      },
      props: {
        todo: Object,
        toggleTodo: Function
      },
      methods: {
        // 控制鼠标移入移出
        isShowRemoveBtn(flag){
          // 鼠标移入
          if(flag){
            this.btnFlag = true;
            this.bgColor = '#666';
          }else{
            // 鼠标移出
            this.btnFlag = false;
            this.bgColor = '#fff';
          }
        },
        // 删除选中 todo
        removeTodo(){
          // 删除校验
          if (confirm(`确定要删除${this.todo.id}吗?`)) {
            // this.removeSelectTodo(this.todo);
            this.$bus.$emit('removeSelectTodo', this.todo);
          }
        }
      },
      computed: {
        isChecked: {
          get(){
            return this.todo.isChecked
          },
          set(value){
            // 这里是不能对 props 中属性进行修改 原则
            // this.todo.isChecked = value;
            this.toggleTodo(this.todo);
          }
        }
      }
  }
</script>

<style scope>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>