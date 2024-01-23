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
    required: true,
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
defineComponent({
  setup() {
    return {
      isActive,
      selectedOption,
      options,
      toggleMenu,
      selectOption,
    };
  },
});
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="ktv-input-dropdown">
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
      />
      <IconCircleX
        v-if="model.length >= 1"
        class="icon-close"
        @click.stop.prevent="resetText"
      />
      <IconAlertTriangleFilled v-if="errorValidation" />
      <div
        class="select-menu"
        :class="{ active: isActive }"
      >
        <div
          class="select-btn"
          @click="toggleMenu"
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
@import "./input-dropdown";
</style>
