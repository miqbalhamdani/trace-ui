<script setup>
import * as TablerIcons from "@tabler/icons-vue";

const props = defineProps({
  label: {
    type: String,
    default: "Chips",
  },
  icon: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "medium",
  },
  type: {
    type: String,
    default: "default",
  },
});

const iconComponents = Object.fromEntries(Object.entries(TablerIcons).map(([key, value]) => [key, ref(value)]));
const getIconComponent = (iconName) => {
  const iconRef = iconComponents[iconName];
  if (iconRef) {
    return iconRef.value;
  } else {
    return null;
  }
};

const chipsClasses = computed(() => `ktv-chips --${props.type} --${props.size}`);
const iconComponent = computed(() => getIconComponent(props.icon));
</script>

<template>
  <div :class="chipsClasses">
    <component :is="iconComponent"></component>
    <span>{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "./chips";
</style>
