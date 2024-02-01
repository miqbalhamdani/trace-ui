<script setup>
import KtvCheckbox from "~/components/checkbox/Checkbox.vue";
import KtvFormGroup from "~/components/form-group/FormGroup.vue";
import KtvRadio from "~/components/radio/Radio.vue";
import KtvSwitch from "~/components/switch/Switch.vue";

const radioButton = ref("");
const dataRadioButton = [
  { value: "bmw", label: "BMW" },
  { value: "tesla", label: "Tesla", disabled: true, checked: true },
  { value: "audi", label: "Audi" },
  { value: "toyota", label: "Toyota", checked: true },
  { value: "jeep", label: "Jeep" },
];

const checkboxModel = ref("");
const dataCheckBox = [
  { value: "bmw", label: "BMW" },
  { value: "tesla", label: "Tesla", disabled: true, checked: true },
  { value: "audi", label: "Audi" },
  { value: "toyota", label: "Toyota", checked: true },
  { value: "jeep", label: "Jeep" },
];

const isSwitchChecked = ref(false);
</script>

<template>
  <div>
    <KtvFormGroup position="vertical">
      <KtvRadio
        v-for="i in dataRadioButton"
        :id="i.value"
        :key="i.value"
        v-model="radioButton"
        :value="i.value"
        :label="i.label"
        name="select-car"
        :disabled="i.disabled"
        :checked="i.checked"
      />
    </KtvFormGroup>

    <KtvFormGroup>
      <KtvCheckbox
        v-for="i in dataCheckBox"
        :id="i.index"
        :key="i.value"
        v-model="checkboxModel"
        :label="i.label"
        :value="i.value"
        :disabled="i.disabled"
        :checked="i.checked"
      />
    </KtvFormGroup>

    <KtvSwitch
      v-model="isSwitchChecked"
      label="Subscribe"
    />
  </div>
</template>
