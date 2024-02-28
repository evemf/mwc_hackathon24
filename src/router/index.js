// index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import Dashboard from '../components/PatientDashboard.vue';
import store from '../store';

const routes = [
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegistrationForm },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;