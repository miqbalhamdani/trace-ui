<script setup>
const props = defineProps({
  position: {
    type: String,
    default: "horizontal",
  },
});

const positionClasses = computed(() => props.position);
</script>

<template>
  <div
    class="ktv-form-group"
    :class="positionClasses"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "./form-group";
</style>
