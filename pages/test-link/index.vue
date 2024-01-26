<script setup>
import KtvLink from "~/components/link/Link.vue";
</script>

<template>
  <div style="display: flex; gap: 24px; flex-direction: column">
    <div class="d-flex">
      <KtvLink
        size="small"
        label="nastar"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="small"
        label="nastar"
        left-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="small"
        label="nastar"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="small"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
    </div>
    <div class="d-flex">
      <KtvLink label="nastar"></KtvLink>
      <KtvLink
        label="nastar"
        left-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        label="nastar"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
    </div>
    <div class="d-flex">
      <KtvLink
        size="large"
        label="nastar"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="large"
        label="nastar"
        left-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="large"
        label="nastar"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
    </div>
    <div class="d-flex">
      <KtvLink
        size="extra-large"
        label="nastar"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="extra-large"
        label="nastar"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
    </div>
    <div class="d-flex">
      <KtvLink
        disabled
        size="extra-large"
        label="nastar"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        disabled
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        disabled
        size="extra-large"
        label="nastar"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
      <KtvLink
        disabled
        size="extra-large"
        label="nastar"
        left-icon="IconHome"
        right-icon="IconHome"
        to="https://www.google.com/"
        target="_blank"
      ></KtvLink>
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
