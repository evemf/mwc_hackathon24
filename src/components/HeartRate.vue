<template>
  <div class="heart-rate">
    <h2>Heart Rate Parameters</h2>
    <div v-if="heartRate">
      <p><strong>Heart Rate:</strong> {{ heartRate.rate }} bpm</p>
      <p><strong>Date:</strong> {{ heartRate.date }}</p>
      <!-- You can add more parameters here if needed -->
    </div>
    <div v-else>
      <p>No heart rate data available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeartRate',
  props: {
    heartRate: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.heart-rate {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>