<template>
    <div>
        <div id="header" :style='{background:obj.bgColor}'>
            <header>{{obj.name}}</header>
            <span>
           <router-link to="/">首页</router-link>
            </span>
            </div>
    </div>
</template>

<script>
    export default {
       props:['obj']
    }
</script>

<style scoped>
   #header{
    height: 1rem;
    background: red;
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
   }
   #header a{
    color:black;
    outline: none;
}
#header a.router-link-active{
    color:blanchedalmond;
}
   header{
       text-align: center;
       line-height: 1rem;
       color: #fff;
       font-size: 150%;

   }
   span{
       position: absolute;
       left:0.1rem;
       top:50%;
       transform: translateY(-50%);
       color: #fff;

   }
    
</style>