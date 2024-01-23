<script setup>
import { IconInfoCircle, IconCircleX, IconAlertTriangleFilled, IconSearch, IconChevronDown } from "@tabler/icons-vue";
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
  options: {
    type: Array,
    default: () => [],
  },
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
// const modelValue = ref("");
const resetText = () => {
  // modelValue.value = "";
  emit("update:modelValue", "");
};

// Props V-Model
const model = ref("");
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// Autocomplete
const filteredOptions = ref([]);
const dropdownVisible = ref(false);
const handleClickOutside = () => {
  dropdownVisible.value = false;
};
function handleInput() {
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

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="ktv-input-select">
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
        :placeholder="placeholder"
        :type="type"
        :error="errorValidation"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keydown.enter.prevent="selectOption"
      />
      <IconCircleX
        v-if="model.length >= 1"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="errorValidation" />
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
@import "./input-select";
</style>
