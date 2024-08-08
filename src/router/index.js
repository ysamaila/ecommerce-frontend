import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import AddProduct from '@/views/AddProduct.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },  // Register route
    { path: '/add-product', component: AddProduct, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
