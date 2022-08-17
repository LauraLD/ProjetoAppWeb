import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/login/LoginComponent'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home/HomeComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/register/RegisterComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {

  if (to.name) {
    NProgress.start();
  }
  next();
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
