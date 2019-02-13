<template>
    <div>
        我是Mine<br>
        我的名字是{{$route.params.name}}
        -----
       我的学号是{{$route.params.id}}
       <br>
       {{$store.state.count}}
       <button @click="$store.commit('add',10)">加十</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>