<script setup>
import "tippy.js/dist/tippy.css";

import { IconAlertTriangleFilled, IconChevronDown,IconCircleX, IconInfoCircle, IconSearch } from "@tabler/icons-vue";
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
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    required: true,
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

// Reset Text
const resetText = () => {
  model.value = "";
};

// Props V-Model
const model = ref("");
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// Dropdown
const isActive = ref(false);
const selectedOption = ref("Select");
const handleClickOutside = (event) => {
  if (!event.target.closest(".select-menu")) {
    isActive.value = false;
  }
};
function toggleMenu() {
  if (!props.disabled) {
    isActive.value = !isActive.value;
  }
}
function selectOption(option) {
  selectedOption.value = option.label;
  isActive.value = false;
}

function getLabelId() {
  return props.label.toLowerCase().replace(/\s+/g, "_");
}

// const schema = Yup.object().shape({
//   input_dropdown: Yup.string()
//     .required()
//     .label(props.label.charAt(0).toUpperCase() + props.label.slice(1)),
// });

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="ktv-input-dropdown"
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
        as="input"
        name="input_dropdown"
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :rules="rules"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleFocus"
      />
      <IconCircleX
        v-if="meta.dirty && !disabled && !readonly"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="rules && meta.touched && !meta.valid && !disabled && !readonly" />
      <div :class="{ 'select-menu': true, active: isActive }">
        <div
          class="select-btn"
          @click="!readonly && !disabled ? toggleMenu() : null"
        >
          <span class="sBtn-text">{{ selectedOption }}</span>
          <IconChevronDown />
        </div>
        <ul class="options">
          <li
            v-for="option in options"
            :key="option.id"
            class="option"
            @click="selectOption(option)"
          >
            <span class="option-text">{{ option.label }}</span>
          </li>
        </ul>
      </div>
    </div>
    <span
      v-if="supportText || rules"
      class="helper-text"
    >
      <p v-if="rules && !readonly && meta.touched && !meta.valid">
        <ErrorMessage name="input_dropdown" />
      </p>
      <p v-else-if="supportText">
        {{ supportText }}
      </p>
    </span>
  </Form>
</template>

<style lang="scss" scoped>
@import "./input-dropdown";
</style>
