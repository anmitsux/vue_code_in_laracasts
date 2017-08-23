Vue.component('modal',{
  template:'<div class="modal is-active"><div class="modal-background"></div><div class="modal-content"><div class="box"><slot></slot></div></div><button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button></div>',

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

new Vue({
  el:'#root',
  data:{
    modalVisible:false
  },
  mounted:{
    
  }
});
