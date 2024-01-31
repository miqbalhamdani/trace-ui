<script setup lang="ts">
import {
  IconChevronDown,
  IconChevronRight,
  IconFile,
  IconFileText,
  IconLogout,
  IconMessage,
  IconSettings,
  IconUser,
  IconUserCode,
  IconUsers,
} from "@tabler/icons-vue";

import { type Navigations } from "./header.interface";

const props = defineProps<{
  userName: string;
  userGroup: string;
  navigations: Navigations[];
}>();

const emit = defineEmits(["logout"]);

const openUser = () => {
  const dropdownUser = document.querySelector<HTMLElement>(".dropdown-user");
  if (dropdownUser && dropdownUser.style && dropdownUser.style.display === "flex") {
    dropdownUser.style.display = "none";
  } else if (dropdownUser) {
    dropdownUser.style.display = "flex";
  }

  document.addEventListener("click", (event: any) => {
    if (!event.target.closest(".navbar-user") && dropdownUser) {
      dropdownUser.style.display = "none";
    }
  });
};

const openGroup = (item: Navigations) => {
  if (item.user_group === undefined) return;
  const secondGroup = document.querySelector<HTMLElement>(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "block";
  }
};
const closeGroup = (item: Navigations) => {
  if (item.user_group === undefined) return;
  const secondGroup = document.querySelector<HTMLElement>(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "none";
  }
};
</script>
<template>
  <span
    class="navbar-user"
    @click="openUser()"
  >
    <span>
      <p class="text-name">{{ props.userName }}</p>
      <p class="text-group">{{ props.userGroup }}</p>
    </span>
    <img
      src="/images/user1.png"
      alt="emptyPhoto"
    />
    <IconChevronDown />

    <ClientOnly>
      <div class="dropdown-user">
        <div
          v-for="(item, index) in navigations"
          :key="index"
          class="list"
          @mouseenter="openGroup(item)"
          @mouseleave="closeGroup(item)"
        >
          <NuxtLink
            :to="item.url"
            class="link-text"
          >
            <template v-if="item.icon === 'IconUser'">
              <IconUser />
            </template>
            <template v-else-if="item.icon === 'IconUserCode'">
              <IconUserCode />
            </template>
            <template v-else-if="item.icon === 'IconFileText'">
              <IconFileText />
            </template>
            <template v-else-if="item.icon === 'IconFile'">
              <IconFile />
            </template>
            <template v-else-if="item.icon === 'IconMessage'">
              <IconMessage />
            </template>
            <template v-else-if="item.icon === 'IconSettings'">
              <IconSettings />
            </template>
            <span>{{ item.name }}</span>
            <IconChevronRight v-if="item.user_group && item.user_group.length >= 0" />
          </NuxtLink>

          <div
            v-if="item.user_group && item.user_group.length >= 0"
            class="dropdown-group"
          >
            <div class="head">
              <p>Group Account</p>
              <a
                href="#"
                class="view-all"
              >
                View All
              </a>
            </div>
            <div class="body">
              <div
                v-for="(itemChild, indexItemChild) in item.user_group"
                :key="indexItemChild"
                class="list-group"
              >
                <span class="left">
                  <IconUsers />
                  <span>
                    <p>{{ itemChild.group_name }}</p>
                    <p>{{ itemChild.partner_name }}</p>
                  </span>
                </span>
                <span class="right">
                  <input
                    type="radio"
                    name="radio-group"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div
          class="list-user-logout"
          @click="emit('logout')"
        >
          <a class="link-text">
            <IconLogout />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </ClientOnly>
  </span>
</template>

<style lang="scss" scoped>
@import "header-nav";
</style>

<style lang="scss">
/* Radio */
[type="radio"] {
  position: relative;
  top: 3px;
  width: 16px;
  height: 16px;
  appearance: none;
  border: 1px solid $color-black-20;
  border-radius: 50%;
  transform: scale(1.5);

  &:checked {
    background-color: $color-green;
    border: 1px solid $color-green;

    &::before {
      // font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      color: $color-white;
      content: "";
      background-image: url("~/assets/icon/check.svg");
      background-size: cover;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
