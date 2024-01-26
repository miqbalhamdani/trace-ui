<script setup>
import * as TablerIcons from "@tabler/icons-vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: "",
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
  iconOnly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    default: () => {},
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

const buttonClasses = computed(() => `button --${props.type} --${props.size}`);
// const getIconComponent = (iconName) => TablerIcons[iconName];
const leftIconComponent = computed(() => getIconComponent(props.leftIcon));
const rightIconComponent = computed(() => getIconComponent(props.rightIcon));
const iconComponent = computed(() => getIconComponent(props.icon));
const handleClick = () => {
  props.onClick();
};
</script>

<template>
  <button
    :class="[buttonClasses, { 'icon-only': iconOnly }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <component :is="leftIconComponent"></component>
    <component :is="iconComponent"></component>
    <span v-if="label">{{ label }}</span>
    <component :is="rightIconComponent"></component>
  </button>
</template>

<style lang="scss" scoped>
@import "./button";
</style>
