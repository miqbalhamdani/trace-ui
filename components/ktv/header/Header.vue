<script setup lang="ts">
import { type ApplicationList, type Navigations } from "./header.interface";

const props = defineProps<{
  title: string;
  subtitle: string;
  userName: string;
  userGroup: string;
  navigations: Navigations[];
  appList: ApplicationList[];
  activeAppCode: string;
}>();

const emit = defineEmits(["logout"]);
</script>

<template>
  <div class="custom-header">
    <div class="custom-navbar-left">
      <span>{{ props.title }}</span>
      <span>{{ props.subtitle }}</span>
    </div>
    <div class="custom-navbar-right">
      <KtvHeaderNotif />
      <KtvHeaderNav
        :user-name="userName"
        :user-group="userGroup"
        :navigations="navigations"
        @logout="emit('logout')"
      />
      <KtvHeaderSwitchApp
        :app-list="appList"
        :active-app-code="activeAppCode"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "header";
</style>
