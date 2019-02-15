<template>
  <div id="footer" :style='{background:color.bgColor}'>
    <ul>
      <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path"  @click.native='change(obj)'>{{obj.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){return{
  bg:''
  }},
  props:['menu','color'],
  methods: {
    change(obj){
    this.bg=obj.bgColor;
    this.$emit('changeBg',obj);
    
    }
  },
};
</script>

<style scoped>
#footer a{
    color:black;
    outline: none;
}
#footer a.router-link-active{
    color:blanchedalmond;
}
#footer {
  height: 1rem;
  background: red;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  width: 100%;
}
#footer ul {
  display: flex;
}
li {
  flex-grow:1;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
</style>