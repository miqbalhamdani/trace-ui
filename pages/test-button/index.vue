<script setup>
import KtvButton from "~/components/button/Button.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div class="d-flex">
      <KtvButton
        size="small"
        label="nastar"
      ></KtvButton>
      <KtvButton
        size="small"
        label="nastar"
        left-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="small"
        label="nastar"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="small"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="small"
        icon="IconHome"
        icon-only
      ></KtvButton>
    </div>
    <div class="d-flex">
      <KtvButton label="nastar"></KtvButton>
      <KtvButton
        label="nastar"
        left-icon="IconHome"
      ></KtvButton>
      <KtvButton
        label="nastar"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        icon="IconHome"
        icon-only
      ></KtvButton>
    </div>
    <div class="d-flex">
      <KtvButton
        size="large"
        label="nastar"
      ></KtvButton>
      <KtvButton
        size="large"
        label="nastar"
        left-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="large"
        label="nastar"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="large"
        icon="IconHome"
        icon-only
      ></KtvButton>
    </div>
    <div class="d-flex">
      <KtvButton
        size="extra-large"
        label="nastar"
      ></KtvButton>
      <KtvButton
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="extra-large"
        label="nastar"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        size="extra-large"
        icon="IconHome"
        icon-only
      ></KtvButton>
    </div>
    <div class="d-flex">
      <KtvButton
        disabled
        size="extra-large"
        label="nastar"
      ></KtvButton>
      <KtvButton
        disabled
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
      ></KtvButton>
      <KtvButton
        disabled
        size="extra-large"
        label="nastar"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        disabled
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
      ></KtvButton>
      <KtvButton
        disabled
        size="extra-large"
        icon="IconHome"
        icon-only
      ></KtvButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
}
</style>
