<template>
    <div>
   <router-link to="/photo" v-if='isShow'>
  <v-touch  v-on:swipeleft='gonext()'   class="bg" :style="{backgroundImage:'url('+ photos[iNow].src  +')'}" > 
  </v-touch>
   </router-link>
    </div>
</template>

<script>
import VueTouch from 'vue-touch';
import {mapState} from 'vuex';
import Vue from 'vue';
Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        created() {
            if(this.photos==0)
            {
                this.$router.push('/photo')
            }
            else
            this.isShow=true;
        },
        data() {
            return {
                 iNow:this.$route.params.index,
                 isShow:false
            }
        },
        computed: {
            ...mapState(['photos'])
        },
        methods: {
            gonext(){
                this.iNow++;
                
            }
        }
    }
</script>

<style scoped>
 .bg{
        position: absolute;
        top:1rem;
        left:0px;
        bottom: 1rem;
        right:0px;
        background: #000 no-repeat center center;
        background-size: contain;

    }

</style>