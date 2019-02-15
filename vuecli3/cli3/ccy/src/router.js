import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Picture from './views/Picture.vue';
import Book from './views/Book.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/movie',
  component:Movie},
  {path:'/music',
  component:Music},
  {path:'/picture',
  component:Picture},
  {path:'/book',
  component:Book}
   
  ],
});
