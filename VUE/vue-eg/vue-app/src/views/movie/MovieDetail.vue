<template>
    <div v-if="isShow">
       <h3 class="title"> {{movieDetail.title}}</h3>
       <p>简介：{{movieDetail.summary}}</p> 
        
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data() {
            return {
                movieDetail:{},
                isShow:false
            }
        },
        created() {
            Axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDetail=result.data;
            })
            this.isShow=true;
        },
        
    }
</script>

<style scoped>
.title{
    text-align: center;
}
</style>