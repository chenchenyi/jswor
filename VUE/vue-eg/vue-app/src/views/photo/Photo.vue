<template>
    <div>
            <img  v-for="(value,index) in $store.state.photos" :key="index" :src="value.src" @click="gopicture(index)" alt=""/>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data() {
            return {
               // Photo:[]
            }
        },
        created() {
             Axios.get('/data/photodata.json')
        .then((result)=>{
            // this.Photo=[...result.data.photoData];
             this.$store.commit('addPhoto',result.data.photoData);
        })
        },
        methods: {
            gopicture(index){
                this.$router.push('/detail/'+index);
            }
        }
       
    }
</script>

<style scoped>
img{
    width: 50%;
}
</style>