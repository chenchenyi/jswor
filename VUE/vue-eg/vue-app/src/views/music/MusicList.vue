<template>
    <div>
 <aplayer :music="List[0]" :list='List' v-if="isShow" showLrc/>
    
    </div>
</template>

<script>
import Axios from 'axios';
import Aplayer from 'vue-aplayer';
    export default {
      data() {
        return {
          List:[],
          isShow:false
        }
      },
        components:{Aplayer},
        created() {
            Axios.get('/data/musicdata.json')
            .then((result)=>{
              result.data.musicData.forEach(obj => {
             let   obj1={
                  title:obj.title,
                  artist:obj.author,
                  src:obj.src,
                  pic:obj.musicImgSrc,
                  lrc:`http://localhost:8080/${obj.lrc}`
                }
                this.List.push(obj1);
                
              });
               this.isShow=true;
            })
        },

        
    }
</script>

<style scoped>

</style>