<script setup>
// const props = defineProps(['role', 'defaultChecked']);

const props = defineProps({
  // modelValue: {
  //   type: [String, Number],
  //   required: true,
  // },
  label: {
    type: String,
    default: "Label",
  },
  id: {
    type: String,
    default: null,
  },
  disabled: Boolean,
  checked: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "switch",
  },
  defaultChecked: {
    type: Boolean,
    default: false,
  },
});

const isChecked = ref(props.defaultChecked);
</script>

<template>
  <label
    class="ktv-switch"
    :class="{ 'is-disabled': disabled }"
  >
    <input
      :id="id"
      v-model="isChecked"
      role
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
    />
    <span class="slider"></span>
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
@import "./switch";
</style>
