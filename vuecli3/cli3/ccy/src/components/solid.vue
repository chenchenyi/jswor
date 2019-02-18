<template>
    <div>
<ul>
    <li v-for="(value,index) in menu" :key="index" v-show="index==iNow"><img :src="value" alt=""> </li>
</ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu:[

                ],
                iNow:0
            }
        },
        created() {
            setInterval(()=>
            {
                this.iNow++;
                if(this.iNow==this.menu.length)
                this.iNow=0;
            },1000)
        },
    }
</script>

<style scoped>

</style>