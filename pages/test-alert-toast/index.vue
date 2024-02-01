<script setup>
import KtvAlert from "~/components/alert/Alert.vue";
import KtvButton from "~/components/button/Button.vue";
import KtvToast from "~/components/toast/Toast.vue";
import KtvToastGroup from "~/components/toast/ToastGroup.vue";

// Toast Info
const toastsInfo = ref([]);
const toastTypes = ["info", "warning", "error", "success"];

// const addRandomToastInfo = (title, desc, button, close) => {
const addRandomToastInfo = (title, close) => {
  const type = toastTypes[Math.floor(Math.random() * toastTypes.length)];
  toastsInfo.value.push({ title, close, type });
  // toastsInfo.value.push({ title, desc, button, close, type });
};
const removeToastInfo = (index) => {
  toastsInfo.value.splice(index, 1);
};
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <KtvButton
      label="Test Toast Random"
      size="extra-large"
      @click="addRandomToastInfo('Title Toast', true)"
    />
    <KtvToastGroup>
      <KtvToast
        v-for="(i, index) in toastsInfo"
        :key="index"
        :title="i.title"
        :desc="i.desc"
        :button="i.button"
        :close="i.close"
        :type="i.type"
        @close="removeToastInfo(index)"
      />
    </KtvToastGroup>
    <KtvAlert
      close
      title="Alert Info"
      desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
    />
    <KtvAlert
      close
      title="Warning Info"
      desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
      text-button="Undo"
      type="warning"
    />
    <KtvAlert
      close
      title="Error Info"
      desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
      primary-button="Yes"
      secondary-button="No"
      type="error"
    />
    <KtvAlert
      close
      title="Success Info"
      desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
      text-button="Undo"
      primary-button="Yes"
      secondary-button="No"
      type="success"
    />
    <KtvAlert
      close
      title="Alert Info"
      text-button="Undo"
      primary-button="Yes"
      secondary-button="No"
    />
    <KtvAlert
      close
      title="Warning Info"
      primary-button="Yes"
      secondary-button="No"
      type="warning"
    />
    <KtvAlert
      close
      title="Error Info"
      text-button="Undo"
      type="error"
    />
    <KtvAlert
      close
      type="success"
    />
  </div>
</template>
