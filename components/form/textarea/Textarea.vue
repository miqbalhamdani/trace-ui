<script setup>
import { IconInfoCircle, IconCircleX, IconAlertTriangleFilled, IconSearch } from "@tabler/icons-vue";
import "tippy.js/dist/tippy.css";

const props = defineProps({
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
  maxlength: {
    type: String,
    default: null,
  },
  showCounter: Boolean,
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

// Local state
const text = ref("");

// Computed property for character counter
const counter = computed(() => text.value.length);

// Event handler for textarea input
const handleInput = (event) => {
  text.value = event.target.value;
  const inputText = event.target.value;
  if (inputText.length <= props.maxlength) {
    text.value = inputText;
  }
  const element = event.target;
  element.style.height = "auto";
  element.style.height = `${element.scrollHeight}px`;
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
      <textarea
        v-model="model"
        class="auto-grow"
        :disabled="disabled"
        :placeholder="placeholder"
        :error="errorValidation"
        :maxlength="maxlength"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      ></textarea>
      <IconCircleX
        v-if="model.length >= 1"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="errorValidation" />
    </div>
    <div class="support-counter">
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
      <p
        v-if="showCounter"
        class="counter"
      >
        {{ counter }}
        <span v-if="maxlength">/ {{ maxlength }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./textarea";
</style>
