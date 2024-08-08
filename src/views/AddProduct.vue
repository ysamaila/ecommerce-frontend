<template>
    <div>
        <h1>Add Product</h1>
        <form @submit.prevent="addProduct">
            <input type="text" v-model="name" placeholder="Product name" />
            <textarea v-model="description" placeholder="Product description"></textarea>
            <input type="number" v-model="price" placeholder="Product price" />
            <input type="text" v-model="imageURL" placeholder="Image URL" />
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            price: '',
            imageURL: ''
        };
    },
    methods: {
        async addProduct() {
            try {
                await this.$store.dispatch('addProduct', {
                    name: this.name,
                    description: this.description,
                    price: this.price,
                    imageURL: this.imageURL
                });
                this.$router.push('/');
            } catch (err) {
                console.error(err);
            }
        }
    }
};
</script>
