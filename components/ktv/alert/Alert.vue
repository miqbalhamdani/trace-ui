<script setup>
import {
  IconAlertTriangleFilled,
  IconInfoSquareRoundedFilled,
  IconSquareRoundedCheckFilled,
  IconSquareRoundedXFilled,
  IconX,
} from "@tabler/icons-vue";
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  desc: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "info",
  },
  textButton: {
    type: String,
    default: null,
  },
  primaryButton: {
    type: String,
    default: null,
  },
  secondaryButton: {
    type: String,
    default: null,
  },
  close: {
    type: Boolean,
    default: false,
  },
  onClickTextBtn: {
    type: Function,
    default: () => {},
  },
  onClickPrimaryBtn: {
    type: Function,
    default: () => {},
  },
  onClickSecondaryBtn: {
    type: Function,
    default: () => {},
  },
});

const alertClasses = computed(() => {
  const baseClass = `--${props.type}`;
  const hasNoDescClass = props.desc === null ? "--no-desc" : "";
  return `${baseClass} ${hasNoDescClass}`;
});

const getIconComponent = (type) => {
  if (type === "info") {
    return IconInfoSquareRoundedFilled;
  } else if (type === "warning") {
    return IconAlertTriangleFilled;
  } else if (type === "error") {
    return IconSquareRoundedXFilled;
  } else if (type === "success") {
    return IconSquareRoundedCheckFilled;
  } else {
    return null;
  }
};

const closeAlert = ref(false);
const toggleClose = () => {
  closeAlert.value = true;
};

const handleClickTextBtn = () => {
  props.onClickTextBtn();
};
const handleClickPrimaryBtn = () => {
  props.onClickPrimaryBtn();
};
const handleClickSecondaryBtn = () => {
  props.onClickSecondaryBtn();
};
</script>
<template>
  <div
    class="ktv-alert"
    :class="[alertClasses, { 'd-none': closeAlert }]"
  >
    <component :is="getIconComponent(type)"></component>
    <span class="content">
      <p class="title">{{ title }}</p>
      <p
        v-if="desc"
        class="desc"
      >
        {{ desc }}
      </p>
      <span class="box-button">
        <button
          v-if="textButton"
          class="text-button"
          @click="handleClickTextBtn"
        >
          {{ textButton }}
        </button>
        <button
          v-if="secondaryButton"
          class="secondary-button"
          @click="handleClickSecondaryBtn"
        >
          {{ secondaryButton }}
        </button>
        <button
          v-if="primaryButton"
          class="primary-button"
          @click="handleClickPrimaryBtn"
        >
          {{ primaryButton }}
        </button>
      </span>
    </span>
    <IconX
      v-if="close"
      class="icon-close"
      @click="toggleClose"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./alert";
</style>
