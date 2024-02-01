<script setup>
import KtvChips from "~/components/chips/Chips.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div class="d-flex">
      <KtvChips
        label="Error"
        type="error"
        icon="IconChecks"
        size="large"
      />
      <KtvChips
        label="Error"
        type="error"
        icon="IconChecks"
      />
      <KtvChips
        label="Error"
        type="error"
        icon="IconChecks"
        size="small"
      />
    </div>
    <div class="d-flex">
      <KtvChips
        label="Warning"
        type="warning"
        icon="IconChecks"
        size="large"
      />
      <KtvChips
        label="Warning"
        type="warning"
        icon="IconChecks"
      />
      <KtvChips
        label="Warning"
        type="warning"
        icon="IconChecks"
        size="small"
      />
    </div>
    <div class="d-flex">
      <KtvChips
        label="Success"
        icon="IconChecks"
        size="large"
      />
      <KtvChips
        label="Success"
        icon="IconChecks"
      />
      <KtvChips
        label="Success"
        icon="IconChecks"
        size="small"
      />
    </div>
    <div class="d-flex">
      <KtvChips
        label="Info"
        type="info"
        icon="IconChecks"
        size="large"
      />
      <KtvChips
        label="Info"
        type="info"
        icon="IconChecks"
      />
      <KtvChips
        label="Info"
        type="info"
        icon="IconChecks"
        size="small"
      />
    </div>
    <div class="d-flex">
      <KtvChips
        label="Inactive"
        type="rest"
        icon="IconChecks"
        size="large"
      />
      <KtvChips
        label="Inactive"
        type="rest"
        icon="IconChecks"
      />
      <KtvChips
        label="Inactive"
        type="rest"
        icon="IconChecks"
        size="small"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
}
</style>
