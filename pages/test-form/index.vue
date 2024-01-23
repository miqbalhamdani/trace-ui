<script setup>
import KtvInput from "~/components/form/input/Input.vue";
import KtvTextArea from "~/components/form/textarea/Textarea.vue";
import KtvInputDropdown from "~/components/form/input-dropdown/InputDropdown.vue";
import KtvInputSelect from "~/components/form/input-select/InputSelect.vue";

const textField = ref("");
const textFieldIsValid = computed(() => textField.value.length <= 3);

const textArea = ref("");
const textAreaIsValid = computed(() => textArea.value.length <= 3);

const inputDropdown = ref("");
const inputDropdownIsValid = computed(() => inputDropdown.value.length <= 3);
const dataInputDropdown = [
  { id: 1, label: "cm3" },
  { id: 2, label: "mm4" },
  { id: 3, label: "kg5" },
];

const inputSelect = ref("");
const inputSelectIsValid = computed(() => inputSelect.value.length <= 3);
const dataInputSelect = ["Test A", "Test B", "Test C", "Test A", "Test B", "Test C", "Test A", "Test B", "Test C"];
</script>

<template>
  <div style="display: flex; gap: 24px">
    <KtvTextArea
      v-model="textArea"
      name="textfield"
      label="Input Textfield"
      placeholder="Placeholder Input Textfield"
      support-text="Supporting Input Textfield"
      :error-validation="!textAreaIsValid"
      error-message="Error Input Textfield"
      tooltip="Tooltip Input Textfield"
      maxlength="50"
      show-counter
    />
    <KtvTextArea
      v-model="textArea"
      name="textfield"
      label="Input Textfield"
      placeholder="Placeholder Input Textfield"
      tooltip="Tooltip Input Textfield"
      show-counter
    />
    <KtvInput
      v-model="textField"
      name="textfield"
      label="Input Textfield"
      placeholder="Placeholder Input Textfield"
      support-text="Supporting Input Textfield"
      :error-validation="!textFieldIsValid"
      error-message="Error Input Textfield"
      tooltip="Tooltip Input Textfield"
    />
    <KtvInputDropdown
      v-model="inputDropdown"
      name="input-dropdown"
      label="Input Dropdown"
      placeholder="Placeholder Input Dropdown"
      support-text="Supporting Input Dropdown"
      :error-validation="!inputDropdownIsValid"
      error-message="Error Input Dropdown"
      :options="dataInputDropdown"
      tooltip="Tooltip Input Dropdown"
    />
    <KtvInputSelect
      v-model="inputSelect"
      name="input-select"
      label="Input Select"
      placeholder="Placeholder Input Select"
      support-text="Supporting Input Select"
      :error-validation="!inputSelectIsValid"
      error-message="Error Input Select"
      :options="dataInputSelect"
      tooltip="Tooltip Input Select"
    />
  </div>
</template>
