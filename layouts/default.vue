<template>
  <main>
    <Sidebar />
    <div class="content-ds">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Header />
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

.content-ds {
  position: relative;
  top: 91px;
  width: 100%;
  max-width: calc(100% - 240px);
  padding: 20px;
  margin-right: 0;
  margin-left: auto;
}
</style>
