<template>
    <div>
        <h1>Products</h1>
        <input type="text" v-model="search" placeholder="Search products" />
        <div v-for="product in filteredProducts" :key="product._id">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            <img :src="product.imageURL" alt="Product image" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        };
    },
    computed: {
        filteredProducts() {
            return this.$store.getters.products.filter(product =>
                product.name.toLowerCase().includes(this.search.toLowerCase())
            );
        }
    },
    created() {
        this.$store.dispatch('fetchProducts');
    }
};
</script>
