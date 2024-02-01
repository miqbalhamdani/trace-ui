<script setup lang="ts">
import appList from "@/json/applicationList.json";
import navigations from "@/json/navigations.json";
import menus from "@/json/sidebar.json";
</script>

<template>
  <main>
    <div class="flex flex-row">
      <KtvSidebar :menus="menus" />

      <div class="main-content">
        <KtvHeader
          title="Program KPI (General)"
          subtitle="Program KPI (General)"
          user-name="User Name"
          user-group="User group name"
          :navigations="navigations"
          :app-list="appList"
          active-app-code="loan"
          @logout="() => console.log('doing logout trigger')"
        />
        <div class="content-ds">
          <NuxtLoadingIndicator />
          <NuxtPage />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
  opacity: 0;
}

.main-content {
  display: flex;
  flex-flow: column;
  width: calc(100% - 240px);
  height: 100vh;
}

.content-ds {
  padding: 20px;
}
</style>
