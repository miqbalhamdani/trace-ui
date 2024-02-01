<script setup>
import "tippy.js/dist/tippy.css";

import { IconAlertTriangleFilled, IconCircleX, IconInfoCircle, IconSearch } from "@tabler/icons-vue";
import { ErrorMessage,Field, Form } from "vee-validate";
// import * as Yup from "yup";

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
  maxlength: {
    type: String,
    default: null,
  },
  rules: {
    type: Function,
    default: () => {},
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
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

function getLabelId() {
  return props.label.toLowerCase().replace(/\s+/g, "_");
}

// const schema = Yup.object().shape({
//   input_textarea: Yup.string()
//     .required()
//     .label(props.label.charAt(0).toUpperCase() + props.label.slice(1)),
// });

// Props V-Model
const model = ref("");
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// Reset Text
const resetText = () => {
  model.value = "";
};

// Local state
const text = ref("");

// Computed property for character counter
const counter = computed(() => text.value.length);

// Event handler for textarea input
const handleInput = (event) => {
  inputField.value.classList.add("is-focused");
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
  <Form
    v-slot="{ meta }"
    class="ktv-input-textarea"
    as="div"
  >
    <div class="title">
      <label :for="getLabelId()">{{ label }}</label>

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
      :class="{
        'input': true,
        'is-error': rules && meta.touched && !meta.valid,
        'is-disabled': disabled,
        'is-readonly': readonly,
      }"
    >
      <IconSearch v-if="icon" />
      <Field
        :id="getLabelId()"
        v-model="model"
        as="textarea"
        class="auto-grow"
        name="input_textarea"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :maxlength="maxlength"
        :rows="3"
        :rules="rules"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
      <IconCircleX
        v-if="meta.dirty && !disabled && !readonly"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="rules && meta.touched && !meta.valid && !disabled && !readonly" />
    </div>
    <div class="support-counter">
      <span
        v-if="supportText || rules"
        class="helper-text"
      >
        <p v-if="rules && !readonly && meta.touched && !meta.valid">
          <ErrorMessage name="input_textarea" />
        </p>
        <p v-else-if="supportText">
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
  </Form>
</template>

<style lang="scss" scoped>
@import "./textarea";
</style>
