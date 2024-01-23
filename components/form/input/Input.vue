<script setup>
import { IconInfoCircle, IconCircleX, IconAlertTriangleFilled, IconSearch } from "@tabler/icons-vue";
import "tippy.js/dist/tippy.css";

defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    default: "Label",
  },
  tooltip: {
    type: [Boolean, String],
    default: false,
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  supportText: {
    type: [Boolean, String],
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: Boolean,
    default: false,
  },
  errorValidation: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "Error Message",
  },
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

// Focus Add Class
const inputField = ref(null);
function handleFocus() {
  inputField.value.classList.add("is-focused");
}

function handleBlur() {
  inputField.value.classList.remove("is-focused");
}

// Props V-Model
const model = ref("");
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// Reset Text
// const modelValue = ref("");
const resetText = () => {
  // modelValue.value = "";
  model.value = "";
};
</script>

<template>
  <div class="ktv-input">
    <div class="title">
      <label>{{ label }}</label>

      <div v-if="tooltip">
        <tippy
          :content="tooltip"
          :arrow="true"
          theme="customTheme"
        >
          <IconInfoCircle />
        </tippy>
      </div>
    </div>
    <div
      ref="inputField"
      class="input"
      :class="{ 'is-error is-focused': errorValidation, 'is-disabled': disabled }"
    >
      <IconSearch v-if="icon" />
      <input
        v-model="model"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
        :error="errorValidation"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <IconCircleX
        v-if="model.length >= 1"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="errorValidation" />
    </div>
    <span v-if="supportText">
      <p
        v-if="errorValidation"
        class="helper-text"
      >
        {{ errorMessage }}
      </p>
      <p
        v-if="!errorValidation"
        class="helper-text"
      >
        {{ supportText }}
      </p>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "./input";
</style>
