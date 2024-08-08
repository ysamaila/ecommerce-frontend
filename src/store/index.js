import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        user: null,
        products: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setProducts(state, products) {
            state.products = products;
        },
        addProduct(state, product) {
            state.products.push(product);
        }
    },
    actions: {
        async login({ commit }, credentials) {
            const response = await axios.post('/api/auth/login', credentials);
            commit('setUser', response.data.user);
        },
        async fetchProducts({ commit }) {
            const response = await axios.get('/api/products');
            commit('setProducts', response.data);
        },
        async addProduct({ commit }, product) {
            const response = await axios.post('/api/products', product);
            commit('addProduct', response.data);
        },
        actions: {
            async register({ commit }, userData) {
              try {
                const response = await axios.post('/api/auth/register', userData);
                commit('setUser', response.data.user);
              } catch (error) {
                throw new Error('Registration failed');
              }
            }}
    },
    getters: {
        isAuthenticated: state => !!state.user,
        products: state => state.products
    }
});


