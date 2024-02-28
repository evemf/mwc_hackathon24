<!-- RegistrationForm.vue -->
<template>
  <div class="registration-form">
    <h2>Registration Form</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat Password:</label>
        <input type="password" id="repeatPassword" v-model="repeatPassword" required>
      </div>
      <div class="form-group">
        <input type="checkbox" id="bloodPressure" v-model="bloodPressure">
        <label for="bloodPressure" class="checkbox-label">Blood Pressure</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="heartRate" v-model="heartRate">
        <label for="heartRate" class="checkbox-label">Heart Rate</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="respiratoryRate" v-model="respiratoryRate">
        <label for="respiratoryRate" class="checkbox-label">Respiratory Rate</label>
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
      password: '',
      repeatPassword: '',
      bloodPressure: false,
      heartRate: false,
      respiratoryRate: false
    };
  },
  methods: {
    register() {
      // Implement registration logic here
      console.log('Registration form submitted');
      this.$router.push('/login');
    }
  }
};
</script>
  
  <style lang="scss" scoped>
  .registration-form {
    background-color: #c3c3c3;
    width: 300px;
    margin: 0 auto;
    color: #000000;
    padding: 20px;

    h2 {
      margin-bottom: 20px;
    }
  
    input {
      display: block;
      margin-bottom: 10px;
      width: 100%;
      padding: 10px;
    }

    input[type="checkbox"] {
      display: inline-block;
      vertical-align: middle;
      width: auto;
    }

    .checkbox-label {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px; /* Add some spacing between the checkbox and label */
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
    margin-bottom: 20px;
  }
  
    .error {
      color: red;
    }
  }
  </style>