<script setup>
const props = defineProps({
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
  name: {
    type: String,
    default: null,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  disabled: Boolean,
  checked: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
// const model = ref("");
const model = ref(props.checked ? props.modelValue : null);
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <label
    class="ktv-radio"
    :class="{ 'is-disabled': disabled }"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="checked"
    />
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
@import "./radio";
</style>
