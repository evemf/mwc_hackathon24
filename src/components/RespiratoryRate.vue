<template>
  <div class="respiratory-rate">
    <h2>Respiratory Rate</h2>
    <div class="data-container">
      <div class="data-item" v-for="(rate, index) in respiratoryRates" :key="index">
        <p>Measurement {{ index + 1 }}</p>
        <p>Rate: {{ rate }} breaths per minute</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respiratoryRates: [18, 20, 22, 19, 21] // Dummy respiratory rate data
    };
  }
};
</script>

<style scoped>
.respiratory-rate {
  padding: 20px;
}

.data-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.data-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #f8f8f8;
  width: 100%;
}
</style>