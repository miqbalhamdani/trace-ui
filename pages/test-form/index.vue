<script setup>
const textField = ref("");
function validateRule(value) {
  if (!value) {
    return "This field is required";
  }
  if (value.length <= 3) {
    return "This field must be at least 3 character";
  }
  return true;
}

const textArea = ref("");
// const textAreaIsValid = computed(() => textArea.value.length <= 3);

const inputDropdown = ref("");
// const inputDropdownIsValid = computed(() => inputDropdown.value.length <= 3);
const dataInputDropdown = [
  { id: 1, label: "cm3" },
  { id: 2, label: "mm4" },
  { id: 3, label: "kg5" },
];

const inputSelect = ref("");
// const inputSelectIsValid = computed(() => inputSelect.value.length <= 3);
const dataInputSelect = ["Test A", "Test B", "Test C", "Test A", "Test B", "Test C", "Test A", "Test B", "Test C"];

const inputTel = ref("");
// const inputTelIsValid = computed(() => inputTel.value.length <= 3);
</script>

<template>
  <div style="display: flex; gap: 24px">
    <KtvTextArea
      v-model="textArea"
      label="notes"
      placeholder="Placeholder Input TextArea"
      support-text="Supporting Input TextArea"
      tooltip="Tooltip Input TextArea"
      :rules="validateRule"
      maxlength="50"
      show-counter
    />
    <KtvTextArea
      v-model="textArea"
      label="description"
      placeholder="Placeholder Input TextArea"
      tooltip="Tooltip Input TextArea"
      :rules="validateRule"
      show-counter
    />
    <KtvInput
      v-model="textField"
      label="provinsi"
      placeholder="Placeholder Input Textfield"
      support-text="Supporting Input Textfield"
      :rules="validateRule"
      tooltip="Tooltip Input Textfield"
      readonly
    />
    <KtvInputDropdown
      v-model="inputDropdown"
      label="quantity product"
      placeholder="Placeholder Input Dropdown"
      support-text="Supporting Input Dropdown"
      :rules="validateRule"
      :options="dataInputDropdown"
      tooltip="Tooltip Input Dropdown"
      readonly
    />
    <KtvInputSelect
      v-model="inputSelect"
      label="district"
      placeholder="Placeholder Input Select"
      support-text="supporting Input Select"
      :rules="validateRule"
      :options="dataInputSelect"
      tooltip="Tooltip Input Select"
      readonly
    />
    <KtvInputTel
      v-model="inputTel"
      label="input tel"
      placeholder="Placeholder Input Tel"
      support-text="Supporting Input Tel"
      :rules="validateRule"
      tooltip="Tooltip Input Tel"
    />
  </div>
</template>
