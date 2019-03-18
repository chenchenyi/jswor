<template>
    <div v-if="isShow">
        {{$route.params.movieId}}
        {{movieDetail.title}}
        
              <img :src='movieDetail.images.small' alt="" >  <!-- {{movieDetail.images.small}} -->
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
            Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDetail=result.data;
            })
            this.isShow=true;
        },
        
    }
</script>

<style scoped>

</style>