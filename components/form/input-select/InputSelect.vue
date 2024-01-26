<script setup>
import { IconInfoCircle, IconCircleX, IconAlertTriangleFilled, IconSearch, IconChevronDown } from "@tabler/icons-vue";
import "tippy.js/dist/tippy.css";
import { Form, Field, ErrorMessage } from "vee-validate";
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
    default: () => [],
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

function getLabelId() {
  return props.label.toLowerCase().replace(/\s+/g, "_");
}

// const schema = Yup.object().shape({
//   input_select: Yup.string()
//     .required()
//     .label(props.label.charAt(0).toUpperCase() + props.label.slice(1)),
// });

// Autocomplete
const filteredOptions = ref([]);
const dropdownVisible = ref(false);
const handleClickOutside = () => {
  dropdownVisible.value = false;
};
function handleInput() {
  inputField.value.classList.add("is-focused");
  filteredOptions.value = props.options.filter((option) => {
    if (typeof option === "string") {
      return option.toLowerCase().includes(model.value.toLowerCase());
    }
    return false;
  });
  dropdownVisible.value = filteredOptions.value.length > 0;
}

function selectOption(option) {
  model.value = option;
  dropdownVisible.value = false;
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
    class="ktv-input-select"
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
        name="input_select"
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :rules="rules"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keydown.enter.prevent="selectOption"
      />
      <IconCircleX
        v-if="meta.dirty && !disabled && !readonly"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="rules && meta.touched && !meta.valid && !disabled && !readonly" />
      <IconChevronDown />
    </div>
    <ul
      v-if="dropdownVisible && filteredOptions.length > 0"
      class="autocomplete-dropdown"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>

    <span
      v-if="supportText || rules"
      class="helper-text"
    >
      <p v-if="rules && !readonly && meta.touched && !meta.valid">
        <ErrorMessage name="input_select" />
      </p>
      <p v-else-if="supportText">
        {{ supportText }}
      </p>
    </span>
  </Form>
</template>

<style lang="scss" scoped>
@import "./input-select";
</style>
