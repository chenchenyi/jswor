import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Book from './views/book/Book.vue'
import Photo from './views/photo/Photo.vue'
import MusicList from './views/music/MusicList.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import Solid from './components/solid.vue'
import Detail from './views/photo/Detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component:Movie
    },
    {
      path:'/movie',
      component:Movie
    },{
      path:'/music',
      component:Music
    },{
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:'/musiclist',
      component:MusicList
    },
    {
      path:'/moviedetail/:movieId',
      component:MovieDetail
    },
    {
      path:'/solid',
      component:Solid
    },
    {
      path:'/detail/:index',
      component:Detail
    }
  ]
})
