<template>
  <div class="blood-pressure">
    <h2>Blood Pressure Parameters</h2>
    <div v-if="bloodPressure">
      <p><strong>Systolic:</strong> {{ bloodPressure.systolic }} mmHg</p>
      <p><strong>Diastolic:</strong> {{ bloodPressure.diastolic }} mmHg</p>
      <p><strong>Date:</strong> {{ bloodPressure.date }}</p>
      <!-- You can add more parameters here if needed -->
    </div>
    <div v-else>
      <p>No blood pressure data available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BloodPressure',
  props: {
    bloodPressure: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blood-pressure {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>