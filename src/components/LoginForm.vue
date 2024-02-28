<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="Username" required>
      </div>
      <div class="form-group">
        <label for="username">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Password" required>
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'eve' && this.password === '1234') {
        this.$store.commit('login');
        this.$router.push('/dashboard');
      } else {
        alert('Invalid username or password.');
      }
    }
  }
};
</script>
   
  <style lang="scss" scoped>
  .login-form {
    background-color: #c3c3c3;
    width: 300px;
    margin: 0 auto;
    color: #000000;
    padding: 20px;

    h2 {
      margin-bottom: 20px;
    }
  }

  .login-form h2 {
    margin-bottom: 20px;
  }
  
  input {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #06478d;
      transition: background-color 0.3s ease;
    }
  }
  </style>
  