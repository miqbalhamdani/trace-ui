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
  button: {
    type: String,
    default: null,
  },
  close: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const toastClasses = computed(() => {
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

const handleClick = () => {
  props.onClick();
};

const closeAlert = ref(false);

const visibleToast = ref("");

const toggleCloseWithDelay = () => {
  visibleToast.value = "--hidden";
  setTimeout(() => {
    closeAlert.value = true;
  }, 1000);
};

onMounted(() => {
  visibleToast.value = "--visible";
  setTimeout(() => {
    toggleCloseWithDelay();
  }, 5000);
});
</script>
<template>
  <div
    v-if="!closeAlert"
    class="ktv-toast"
    :class="[toastClasses, visibleToast]"
  >
    <component :is="getIconComponent(props.type)"></component>
    <span class="content">
      <p class="title">{{ title }}</p>
      <p
        v-if="props.desc"
        class="desc"
      >
        {{ desc }}
      </p>
      <button
        v-if="props.button"
        @click="handleClick"
      >
        {{ button }}
      </button>
    </span>
    <IconX
      v-if="props.close"
      class="icon-close"
      @click="toggleCloseWithDelay"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./toast";
</style>
