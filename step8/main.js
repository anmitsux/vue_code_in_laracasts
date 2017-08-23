Vue.component('task-list',{
  template:'<ul><task v-for="task in tasks">{{task.description}}</task></ul>',

  data(){
    return {
      tasks:[
        {description:'i gonna play coding',flag:true},
        {description:'whats this?',flag:false},
        {description:'this a pen',flag:true}
      ]
    };
  }
});

Vue.component('task',{
  template:'<li><slot></slot></li>'
});

new Vue({
  el:'#root'
});
