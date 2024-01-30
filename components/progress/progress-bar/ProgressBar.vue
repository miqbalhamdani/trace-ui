<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: null,
    required: true,
  },
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
    default: "contextual",
  },
  animated: {
    type: Boolean,
    default: false,
  },
});

const progressBarClasses = computed(() => `progress --${props.variant} --${props.size}`);
const progressClasses = computed(() => `progress-bar --${props.type} ${props.animated ? "--animated" : ""}`);
const styles = {
  width: `${props.value}%`,
};
</script>

<template>
  <div :class="progressBarClasses">
    <div
      :class="progressClasses"
      :style="styles"
    >
      {{ props.value }}%
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./progress-bar";
</style>
