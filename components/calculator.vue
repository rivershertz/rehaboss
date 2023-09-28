<template>
  <v-container>
    <!-- 
    starting date
    jump gaps (in weeks)
    initial dose
    dose deduction by (amount)(metric) -->
    <v-form
      @submit.prevent
      class="flex flex-col items-center gap-10">
      <h3 class="text-3xl uppercase text-center">setup</h3>
      <v-container class="flex gap-5 justify-center items-center flex-wrap">
        <input
          type="date"
          v-model="formData.startingDate"
          class="flex-auto" />
        <v-text-field
          type="number"
          v-model="formData.jumpsGap"
          label="Jump By (weeks)"
          class="" />

        <v-text-field
          type="number"
          v-model="formData.initialDoseAmount" />
        <v-select
          v-model="formData.initialDoseMetric"
          label="Metric Units"
          class=""></v-select>
        <v-text-field
          type="number"
          v-model="formData.doseDeduction" />
      </v-container>

      <v-btn
        type="submit"
        class="w-fit"
        @click="submitForm"
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
  const formData = reactive({
    startingDate: '',
    jumpsGap: null,
    initialDoseAmount: null,
    initialDoseMetric: null,
    doseDeduction: null,
  });

  const submitForm = () => {
    console.log(formData);
  };
</script>

<style scoped></style>
