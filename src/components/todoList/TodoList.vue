<template>
  <div id="todo-list-example" class="demo">
    <div>
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="你的行程" />
      <input id="month" v-model="month" placeholder="月份" />
      <input id="day" v-model="day" placeholder="日期" />
      <button @click="addNewTodo">Add</button>
    </div>

    <div id="sortDiv">
      <button @click="sortByTime">sort by time</button>
    </div>

    <ul>
      <toDo
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-bind:date="todo.date"
        v-bind:isFinished="todo.isFinished"
        v-bind:index="index"
        v-on:remove="remove(index)"
        v-on:toggle="toggle(todo)"
      ></toDo>
    </ul>
  </div>
</template>
<script>
import toDo from "./toDo.vue";
export default {
  components: {
    toDo,
  },
  //loactionstoray
  mounted() {
    console.log(this.todos);
    this.todos = JSON.parse(localStorage.getItem("todoList"));
    console.log(this.todos);
    this.nextTodoId = this.todos.length + 1;
  },

  data() {
    return {
      newTodoText: "",
      month: "",
      day: "",
      todos: [],
      nextTodoId: 1,
    };
  },
  methods: {
    addNewTodo() {
      if (this.month.indexOf("0") === 0) {
        this.month = this.month.replace("0", ""); //替换第一个数字是0的
      }
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        date: this.month + "/" + this.day,
      });
      this.newTodoText = "";
      this.month = "";
      this.day = "";
      localStorage.setItem("todoList", JSON.stringify(this.todos));
    },
    //时间排序
    sortByTime() {
      this.todos.sort(function (a, b) {
        let aDateArr = a.date.split("/"); // ['5','13']
        let bDateArr = b.date.split("/"); // ['5','14']
        if (aDateArr[0] === bDateArr[0]) {
          return aDateArr[1] - bDateArr[1];
        } else {
          return aDateArr[0] - bDateArr[0];
        }
      });
    },
    remove(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(this.todos));
    },
    toggle(todo) {
      todo.isFinished = !todo.isFinished;
      localStorage.setItem("todoList", JSON.stringify(this.todos));
    },
  },
};
</script>

<style scoped>
@import "../css/NewDolist.css";
</style>
