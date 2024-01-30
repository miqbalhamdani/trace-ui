<script setup>
import * as TablerIcons from "@tabler/icons-vue";

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

const iconComponents = Object.fromEntries(Object.entries(TablerIcons).map(([key, value]) => [key, ref(value)]));
const getIconComponent = (iconName) => {
  const iconRef = iconComponents[iconName];
  if (iconRef) {
    return iconRef.value;
  } else {
    return null;
  }
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
