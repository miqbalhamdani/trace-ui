<script setup lang="ts">
import { IconCheck, IconChevronDown } from "@tabler/icons-vue";

import { type ApplicationList } from "./header.interface";

const props = defineProps<{
  appList: ApplicationList[];
  activeAppCode: string;
}>();

const activeApp = computed(() => props.appList.find((app) => app.code === props.activeAppCode));

const openSwitchApp = () => {
  const dropdownSwitchApp = document.querySelector<HTMLElement>(".dropdown-switch-app");
  if (dropdownSwitchApp && dropdownSwitchApp.style.display === "block") {
    dropdownSwitchApp.style.display = "none";
  } else if (dropdownSwitchApp) {
    dropdownSwitchApp.style.display = "block";
  }

  document.addEventListener("click", (event: any) => {
    if (!event.target.closest(".navbar-switch-app") && dropdownSwitchApp) {
      dropdownSwitchApp.style.display = "none";
    }
  });
};
</script>
<template>
  <span
    class="navbar-switch-app"
    @click="openSwitchApp()"
  >
    <p class="show-title">{{ activeApp?.name }}</p>
    <img
      :src="activeApp?.icon"
      :alt="activeApp?.name"
      class="img-product"
    />
    <IconChevronDown />

    <div class="dropdown-switch-app">
      <div class="head">
        <p>Switch to</p>
      </div>
      <div class="body">
        <a
          v-for="(item, index) in props.appList"
          :key="index"
          class="list"
          :href="item.url"
        >
          <img
            :src="item.icon"
            :alt="item.name"
          />
          <span>
            <p class="title">{{ item.name }}</p>
            <p class="sub-title">{{ item.description }}</p>
          </span>
          <IconCheck v-if="item.code === activeAppCode" />
        </a>
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
@import "header-switch-app";
</style>
