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
      <v-container class="gap-5 grid grid-cols-2">
        <div class="relative col-span-2 place-self-center">
          <label
            for="startingDate"
            class="absolute -top-5 left-0 text-[#898989]"
            >Starting Date</label
          >
          <input
            id="startingDate"
            type="date"
            v-model="formData.startingDate"
            class="flex-auto" />
        </div>
        <v-text-field
          type="number"
          v-model="formData.initialDoseAmount"
          label="Initial Dose Amount" />
        <v-select
          v-model="formData.initialDoseMetric"
          label="Dose Unit"
          variant="outlined"
          :items="['Grams', 'Milligrams', 'Milliliters']"></v-select>
        <v-text-field
          type="number"
          v-model="formData.gapIterations"
          label="Jump By"
          class="" />
        <v-select
          v-model="formData.gapUnit"
          variant="outlined"
          :items="[
            {title: 'Days', value: 1},
            {title: 'Weeks', value: 7},
          ]"></v-select>
        <v-text-field
          type="number"
          v-model="formData.doseDeduction"
          :label="`Deduct
          Dose
          By
          (${formData.initialDoseMetric})`" />
        <v-text-field
          type="number"
          v-model="formData.finalDose"
          :label="`Final Dose (${formData.initialDoseMetric})`" />
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
    gapIterations: null,
    gapUnit: 1,
    initialDoseAmount: null,
    initialDoseMetric: 'Grams',
    doseDeduction: null,
    finalDose: null,
  });

  const submitForm = () => {
    console.log(
      calculateDateRegression({
        ...formData,
        gap: (formData.gapIterations || 1) * formData.gapUnit,
      })
    );
  };
</script>

<style scoped></style>
