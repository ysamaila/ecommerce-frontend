<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await this.$store.dispatch('register', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        console.log(response)
        this.$router.push('/login'); // Redirect to login page after successful registration
      } catch (err) {
        console.error(err);
        // Handle registration error (e.g., show a message to the user)
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.register-container h1 {
  text-align: center;
  margin-bottom: 20px;
}
.register-container div {
  margin-bottom: 15px;
}
.register-container label {
  display: block;
  margin-bottom: 5px;
}
.register-container input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.register-container button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.register-container button:hover {
  background-color: #358a6a;
}
</style>
