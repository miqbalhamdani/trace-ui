<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  disabled: Boolean,
  checked: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

// Props V-Model
const model = ref("");
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <label
    class="ktv-checkbox"
    :class="{ 'is-disabled': disabled }"
  >
    <input
      :id="id"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      :checked="checked"
    />
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
@import "./checkbox";
</style>
