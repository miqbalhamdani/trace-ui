<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "medium",
  },
  variant: {
    type: String,
    default: "general",
  },
  type: {
    type: String,
    default: "border",
  },
});
const spinnerClasses = computed(() => `spinner --${props.variant} --${props.size} --${props.type}`);
</script>

<template>
  <div :class="spinnerClasses"></div>
</template>

<style lang="scss" scoped>
@import "./spinner";
</style>
