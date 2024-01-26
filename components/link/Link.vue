<script setup>
// import * as TablerIcons from "@tabler/icons-vue";
import { IconInfoCircle, IconCircleX, IconAlertTriangleFilled, IconSearch } from "@tabler/icons-vue";

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  rel: {
    type: String,
    default: "noopener noreferrer",
  },
  target: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  leftIcon: {
    type: String,
    default: "",
  },
  rightIcon: {
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
  disabled: {
    type: Boolean,
    default: false,
  },
});

const iconMap = {
  "icon-info-circle": IconInfoCircle,
  "icon-circle-x": IconCircleX,
  "icon-alert-triangle-filled": IconAlertTriangleFilled,
  "icon-search": IconSearch,
};

const getIconComponent = (iconName) => {
  const icon = iconMap[iconName];
  return icon;
};

const linkClasses = computed(() => `link --${props.type} --${props.size}`);
// const getIconComponent = (iconName) => TablerIcons[iconName];
const leftIconComponent = computed(() => getIconComponent(props.leftIcon));
const rightIconComponent = computed(() => getIconComponent(props.rightIcon));
</script>

<template>
  <NuxtLink
    :to="to"
    :rel="rel"
    :target="target"
    :class="linkClasses"
    :disabled="disabled"
  >
    <component :is="leftIconComponent"></component>
    {{ label }}
    <component :is="rightIconComponent"></component>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import "./link";
</style>
