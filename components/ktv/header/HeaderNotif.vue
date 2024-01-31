<script setup>
import { IconBell } from "@tabler/icons-vue";

const openNotification = () => {
  const dropdownNotification = document.querySelector(".dropdown-notification");
  if (dropdownNotification.style.display === "block") {
    dropdownNotification.style.display = "none";
  } else {
    dropdownNotification.style.display = "block";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-notification")) {
      dropdownNotification.style.display = "none";
    }
  });
};
</script>

<template>
  <span
    class="navbar-notification"
    @click="openNotification()"
  >
    <IconBell />
    <span class="has-notif"></span>

    <div class="dropdown-notification">
      <div class="head">
        <span>Notification</span>
        <span>Mark all as read</span>
      </div>
      <div class="body">
        <div class="list-notification-nodata">
          <video
            autoplay
            loop
            muted
            playsinline
            src="~/assets/icons/bell-notification.webm"
            height="120"
            width="120"
          ></video>
          <p>You don't have any notifications</p>
          <p>Please check back later.</p>
        </div>
        <div class="list-notification-data">
          <IconBell />
          <div class="notif-text">
            <p>
              Koltiva Event
              <span class="notif"></span>
            </p>
            <p>Subject - Lorem ipsum dolor sit amet.</p>
            <p>Just Now</p>
          </div>
        </div>
        <div class="list-notification-data readed">
          <IconBell />
          <div class="notif-text">
            <p>Koltiva Event</p>
            <p>Subject - Lorem ipsum dolor sit amet.</p>
            <p>1 hour ago</p>
          </div>
        </div>
      </div>
      <div class="footer">View all notifications</div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
@import "header-notif";
</style>
