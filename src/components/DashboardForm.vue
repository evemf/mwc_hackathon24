<!-- Dashboard.vue -->
<template>
    <div class="dashboard">
      <h2>Welcome, {{ user.username }}</h2>
      <p>Medical information:</p>
      <ul>
        <li>Blood Pressure: {{ bloodPressure }}</li>
        <li>Heart Rate: {{ heartRate }}</li>
        <li>Weight: {{ weight }}</li>
      </ul>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.getters.user;
      },
      bloodPressure() {
        // Dummy data
        return '120/80 mmHg';
      },
      heartRate() {
        // Dummy data
        return '75 bpm';
      },
      weight() {
        // Dummy data
        return '70 kg';
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 600px;
    margin: 0 auto;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px
  }
  </style>