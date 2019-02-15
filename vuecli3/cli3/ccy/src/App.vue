<template>
  <div id="app">
    <c-header :obj='obj'></c-header>
    <div id="content">
      <router-view></router-view>
    </div>
    <c-footer :menu="menu" @changeBg='color' ></c-footer>
  </div>
</template>
<script>
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";

export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          name: "电影",
          bgColor:'pink'
        },
        {
          path: "/book",
          name: "图书",
           bgColor:'blue'
        },
        {
          path: "/picture",
          name: "图片",
           bgColor:'green'
        },
        {
          path: "/music",
          name: "音乐",
           bgColor:'yellow'
        }
      ],
      obj: {path:"/movie",
           name:"电影",
           bgColor:"pink"}
    };
  },
  components: {
    CHeader,
    CFooter
  },
  methods: {
    color(obj){
this.obj=obj;
    }
    
  },
 created(){
    let result=this.menu.filter((obj,index)=>{
      return obj.path==this.$route.path;
    });
    if(result.length)
    this.obj=result[0];
  }
};
</script>
<style>
#content {
  margin: 1rem 0;
}
</style>
