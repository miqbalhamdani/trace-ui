<script setup>
import * as TablerIcons from "@tabler/icons-vue";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#121314",
  },
  size: {
    type: String,
    default: "large",
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
const iconComponent = computed(() => getIconComponent(props.icon));
const iconClasses = computed(() => `icon --${props.size}`);
</script>

<template>
  <component
    :is="iconComponent"
    :color="color"
    :class="iconClasses"
  />
</template>

<style lang="scss" scoped>
@import "./icon";
</style>
