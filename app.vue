<script setup lang="ts">
import menus from "@/json/sidebar.json";
</script>

<template>
  <main>
    <div class="flex flex-row">
      <KtvSidebar :menus="menus" />

      <div class="main-content">
        <KtvHeader />
        <div class="content-ds">
          <NuxtLoadingIndicator />
          Koltiva Indonesia
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
