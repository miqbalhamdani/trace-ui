<script setup lang="ts">
import { type MenuInterface } from "@/json/sidebarInterface";
const props = defineProps<{
  menus: MenuInterface[];
}>();

const activeMenu = ref("");
const showSecondSidebar = (menu: MenuInterface) => {
  activeMenu.value = menu.name;
};
</script>

<template>
  <div class="custom-sidebar-container">
    <div class="logo-container">
      <img
        src="/images/logo-koltitrace-mis.svg"
        class="img-logo"
      />
    </div>

    <ul>
      <li
        v-for="(item, index) in props.menus"
        :key="index"
      >
        <hr
          v-if="item.type === 'title' && index !== 0"
          class="divider"
        />
        <template v-if="item.type === 'title'">
          <label>{{ item.name }}</label>
        </template>

        <template v-else-if="item.childs && item.childs.length > 0">
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar(item)"
            @mouseleave="activeMenu = ''"
          >
            <img :src="`/icons/${item.icon}`" />
            <span class="font-size-14 font-weight-500">{{ item.name }}</span>

            <img src="/icons/arrow-right.svg" />

            <div
              v-if="activeMenu === item.name"
              class="custom-second-sidebar"
            >
              <div
                v-for="(childItem, childIndex) in item.childs"
                :key="`parent-${index}-child-item-${childIndex}`"
                :class="{
                  'custom-second-sidebar-title': childItem.type === 'title',
                  'custom-second-sidebar-list': childItem.type === 'body',
                }"
              >
                <template v-if="childItem.type === 'title'">
                  {{ childItem.name }}
                </template>

                <template v-else>
                  <NuxtLink
                    :to="childItem.url"
                    class="flex justify-between w-full"
                  >
                    <p>{{ childItem.name }}</p>
                    <KtvTooltip
                      v-if="childItem.info !== undefined && childItem.info"
                      content="Lorem ipsum dolor sit amet consectetur"
                    >
                      <img src="/icons/info.svg" />
                    </KtvTooltip>
                  </NuxtLink>
                </template>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <NuxtLink
            :to="item.url"
            class="list-menu"
          >
            <img :src="`/icons/${item.icon}`" />
            <span class="font-size-14 font-weight-500">{{ item.name }}</span>
          </NuxtLink>
        </template>
      </li>
    </ul>

    <hr class="divider-end" />
    <div class="sidebar-bottom">
      <img src="/icons/arrow-up.svg" />
      <p>You have reached the end of the side menu</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "sidebar";
</style>
