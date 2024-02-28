<template>
  <div class="patient-dashboard" v-if="!isProfile">
  <h2>Patient's Dashboard</h2>
    <div class="grid-container">
      <div class="grid-item">
        <BloodPressure />
      </div>
      <div class="grid-item">
        <HeartRate />
      </div>
      <div class="grid-item">
        <RespiratoryRate />
      </div>
    </div>
      <div class="form-group">
        <button @click="viewProfileFunc()">View patient's profile</button>
    </div>
    <button class="logout-button" @click="logout">Logout</button>
  </div>
    <PatientProfile v-if="isProfile" @patient-profile="viewProfileFunc" />
</template>

<script>
import BloodPressure from '@/components/BloodPressure.vue';
import HeartRate from '@/components/HeartRate.vue';
import RespiratoryRate from '@/components/RespiratoryRate.vue';
import PatientProfile from '@/components/PatientProfile.vue';

export default {
  components: {
    BloodPressure,
    HeartRate,
    RespiratoryRate,
    PatientProfile,
  },
    data() {
    return {
      isLoggedIn: false,
      isProfile: false
    };
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
    viewProfileFunc() {
      this.isProfile = true;
      this.$emit('patient-profile');
      console.log(this.isProfile);
    }
  }
};
</script>

<style lang="scss" scoped>
.patient-dashboard {
  padding: 20px;
  color: #2c3e50;
}

.patient-dashboard h2 {
  color: #fefefe;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.grid-item {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #06478d;
    transition: background-color 0.3s ease;
  }
}

.logout-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #c13304;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #712306;
    transition: background-color 0.3s ease;
  }
}
</style>