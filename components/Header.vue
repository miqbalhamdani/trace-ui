<template>
  <div class="custom-header">
    <div class="custom-navbar-left">
      <span>Program KPI (General)</span>
      <span>Program KPI (General)</span>
    </div>
    <div class="custom-navbar-right">
      <!-- <span class="navbar-group" @click="openGroup()">
        <IconUsers />
        <div class="dropdown-group">
          <div class="head">Group Account</div>
          <div class="body">
            <div
              v-for="(i, index) in dataGroupAccount"
              :key="index"
              class="list-group"
            >
              <span class="left">
                <IconUsers />
                <span>
                  <p>{{ i.title }}</p>
                  <p>{{ i.desc }}</p>
                </span>
              </span>
              <span class="right">
                <input type="radio" name="radio-group" />
              </span>
            </div>
          </div>
        </div>
      </span> -->
      <span
        class="navbar-notification"
        @click="openNotification()"
      >
        <IconBell />
        <!-- <span class="has-notif"></span> -->

        <div class="dropdown-notification">
          <div class="head">
            <span>Notification</span>
            <span>Mark all as read</span>
          </div>
          <div class="body">
            <div class="list-notification-nodata">
              <client-only>
                <video
                  autoplay
                  loop
                  muted
                  playsinline
                  src="/icons/bell-notification.webm"
                  height="120"
                  width="120"
                ></video>
              </client-only>
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
      <span
        class="navbar-user"
        @click="openUser()"
      >
        <span>
          <p class="text-name">User Name</p>
          <p class="text-group">User group name</p>
        </span>
        <img
          src="/images/user1.png"
          alt="emptyPhoto"
        />
        <IconChevronDown />

        <div class="dropdown-user">
          <div class="list">
            <a
              href="#"
              class="link-text"
            >
              <IconUser />
              <span>My Profile</span>
            </a>
          </div>
          <div
            class="list"
            @mouseenter="openGroup"
            @mouseleave="closeGroup"
          >
            <a
              href="#"
              class="link-text"
            >
              <IconUserCode />
              <span>User group</span>
              <IconChevronRight />
            </a>
            <div class="dropdown-group">
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
                  v-for="(i, index) in dataGroupAccount"
                  :key="index"
                  class="list-group"
                >
                  <span class="left">
                    <IconUsers />
                    <span>
                      <p>{{ i.title }}</p>
                      <p>{{ i.desc }}</p>
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
          <div class="list">
            <a
              href="#"
              class="link-text"
            >
              <IconFileText />
              <span>Privacy policy</span>
            </a>
          </div>
          <div class="list">
            <a
              href="#"
              class="link-text"
            >
              <IconFile />
              <span>Terms of use</span>
            </a>
          </div>
          <div class="list">
            <a
              href="#"
              class="link-text"
            >
              <IconMessage />
              <span>Feedback</span>
            </a>
          </div>
          <div class="list">
            <a
              href="#"
              class="link-text"
            >
              <IconSettings />
              <span>Settings</span>
            </a>
          </div>
          <hr style="width: 100%; margin-top: 0; margin-bottom: 0; border: 1px solid #e7e7e7" />
          <div class="list-user-logout">
            <a
              href="#"
              class="link-text"
            >
              <IconLogout />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </span>
      <span
        class="navbar-switch-app"
        @click="openSwitchApp()"
      >
        <p class="show-title">MIS Koltitrace</p>
        <img
          src="/images/user-koltitrace.svg"
          alt="MIS Koltitrace"
          class="img-product"
        />
        <IconChevronDown />

        <div class="dropdown-switch-app">
          <div class="head">
            <p>Switch to</p>
          </div>
          <div class="body">
            <div class="list">
              <img
                src="/images/mis-farmgate.svg"
                alt="MIS Farmgate"
              />
              <span>
                <p class="title">MIS Farmgate</p>
                <p class="sub-title">Trading and goods processing</p>
              </span>
              <IconCheck />
            </div>
            <div class="list">
              <img
                src="/images/mis-farmxtension.svg"
                alt="MIS FarmXtention"
              />
              <span>
                <p class="title">MIS FarmXtention</p>
                <p class="sub-title">Data collecting and coaching</p>
              </span>
            </div>
            <div class="list">
              <img
                src="/images/mis-farmretail.svg"
                alt="MIS FarmRetail"
              />
              <span>
                <p class="title">MIS FarmRetail</p>
                <p class="sub-title">POS, retail and inventory</p>
              </span>
            </div>
            <div class="list">
              <img
                src="/images/mis-loan.svg"
                alt="MIS Loan"
              />
              <span>
                <p class="title">MIS Loan</p>
                <p class="sub-title">Loan and repayment</p>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup>
import {
  IconBell,
  IconCheck,
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

const dataGroupAccount = [
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
];
const openGroup = () => {
  const secondGroup = document.querySelector(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "block";
  }
};
const closeGroup = () => {
  const secondGroup = document.querySelector(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "none";
  }
};
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
const openUser = () => {
  const dropdownUser = document.querySelector(".dropdown-user");
  if (dropdownUser.style.display === "flex") {
    dropdownUser.style.display = "none";
  } else {
    dropdownUser.style.display = "flex";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-user")) {
      dropdownUser.style.display = "none";
    }
  });
};
const openSwitchApp = () => {
  const dropdownSwitchApp = document.querySelector(".dropdown-switch-app");
  if (dropdownSwitchApp.style.display === "block") {
    dropdownSwitchApp.style.display = "none";
  } else {
    dropdownSwitchApp.style.display = "block";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-switch-app")) {
      dropdownSwitchApp.style.display = "none";
    }
  });
};
</script>

<style lang="scss" scoped>
/* header */
.custom-header {
  position: absolute;
  top: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  width: calc(100% - 240px);
  padding: 20px 30px;
  margin-left: 240px;
  background-color: #fcfbfc;
  box-shadow: 0 1px $color-black-10;

  .custom-navbar-left {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    align-items: flex-start;

    span {
      &:first-child {
        font-size: 26px;
        font-weight: 600;
        line-height: normal;
        color: $color-black-100;
      }

      &:last-child {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: $color-black-60;
      }
    }
  }

  .custom-navbar-right {
    display: flex;
    column-gap: 28px;
    align-items: center;

    .tabler-icon {
      width: 20px;
      height: 20px;
      color: $color-black-100;
    }

    .navbar-notification {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px 6px 5px 8px;
      cursor: pointer;
      border-radius: 8px;

      &:hover {
        background-color: $color-black-01;
      }

      .has-notif {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 10px;
        height: 10px;
        background-color: $color-red;
        border-radius: 50%;
      }

      .dropdown-notification {
        position: absolute;
        top: 32px;
        right: 0;
        display: none;
        width: 320px;
        background-color: $color-white;
        border-radius: 12px;
        box-shadow: 0 2px 8px 0 rgb(18 18 18 / 12%);

        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid $color-black-10;

          :first-child {
            font-size: 14px;
            font-weight: 700;
          }

          :last-child {
            font-size: 14px;
            font-weight: 400;
          }
        }

        .body {
          height: auto;
          max-height: 410px;
          overflow-y: auto;

          .list-notification-nodata {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;

            p {
              margin-bottom: 0;
              font-size: 18px;
              font-weight: 700;
              color: $color-black-100;

              &:last-child {
                margin-bottom: 0;
                font-size: 14px;
                font-weight: 400;
                color: $color-black-60;
              }
            }
          }

          .list-notification-data {
            display: flex;
            column-gap: 16px;
            align-items: flex-start;
            align-self: stretch;
            padding: 8px;
            margin: 7px 12px;
            background-color: $color-light-green;
            border-radius: 12px;

            &.readed {
              background-color: $color-white;

              &:hover {
                background-color: $color-black-01;
              }
            }

            .tabler-icon-bell {
              width: 30px;
              height: 30px;
              padding: 8px;
              background-color: $color-black-01;
              border-radius: 20px;
            }

            .notif-text {
              display: flex;
              flex-direction: column;
              row-gap: 5px;
              align-items: flex-start;

              p:first-child {
                position: relative;
                margin-bottom: 0;
                font-size: 12px;
                font-weight: 500;
                color: $color-black-100;

                .notif {
                  position: absolute;
                  top: 0;
                  right: -15px;
                  width: 10px;
                  height: 10px;
                  background-color: $color-green;
                  border-radius: 50%;
                }
              }

              p:nth-child(2) {
                margin-bottom: 0;
                font-size: 12px;
                font-weight: 400;
                color: $color-black-100;
              }

              p:last-child {
                margin-bottom: 0;
                font-size: 12px;
                font-weight: 400;
                color: $color-black-40;
              }
            }
          }
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8.5px 16px;
          font-size: 14px;
          font-weight: 400;
          color: $color-black-80;
          border-top: 1px solid $color-black-10;
        }
      }
    }

    .navbar-user {
      position: relative;
      display: flex;
      column-gap: 10px;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 8px;

      // &:hover {
      //   background-color: $color-black-01;
      // }
      .tabler-icon-chevron-down {
        color: $color-black-50;
      }

      .text-name {
        font-size: 14px;
        font-weight: bold;
        color: $color-black-90;
        text-align: right;
      }

      .text-group {
        font-size: 12px;
        color: $color-black-50;
        text-align: right;
      }

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
      }

      .dropdown-user {
        position: absolute;
        top: 56px;
        right: 0;
        display: none;
        flex-direction: column;
        gap: 10px;
        width: 183px;
        padding: 10px 0;
        background-color: $color-white;
        border-radius: 12px;
        box-shadow: 0 2px 8px 0 rgb(18 18 18 / 12%);

        .list {
          padding: 0 10px;

          &:hover {
            .link-text {
              background-color: $color-black-01;
            }
          }

          .link-text {
            display: flex;
            column-gap: 12px;
            align-items: center;
            width: 100%;
            padding: 12px 15px;
            font-size: 14px;
            font-weight: 500;
            color: $color-black-70;
            border-radius: 8px;

            svg {
              width: 18px;
              height: 18px;
              color: $color-black-70;
            }
          }
        }

        .list-user-logout {
          padding: 0 10px;

          &:hover {
            .link-text {
              background-color: $color-light-red;
            }
          }

          .link-text {
            display: flex;
            column-gap: 12px;
            align-items: center;
            width: 100%;
            padding: 12px 15px;
            font-size: 14px;
            font-weight: 500;
            color: $color-red;
            border-radius: 8px;

            svg {
              width: 18px;
              height: 18px;
              color: $color-red;
            }
          }
        }
      }

      .dropdown-group {
        position: absolute;
        top: 0;
        right: 183px;
        display: none;
        width: 320px;
        background-color: $color-white;
        border-radius: 12px;
        box-shadow: 0 2px 8px 0 rgb(18 18 18 / 12%);

        .head {
          display: flex;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid $color-black-10;

          p {
            font-size: 14px;
            font-weight: 700;
            color: $color-black-100;
          }

          .view-all {
            font-size: 14px;
            color: $color-green;
            background-color: $color-white;
          }
        }

        .body {
          display: flex;
          flex-direction: column;
          row-gap: 0;
          height: auto;
          max-height: 350px;
          overflow-y: auto;

          .list-group {
            position: relative;
            display: flex;
            flex-direction: row;
            column-gap: 16px;
            align-items: center;
            align-self: stretch;
            padding: 8px;
            margin: 12px;

            &:last-child {
              &::after {
                display: none;
              }
            }

            &::after {
              position: absolute;
              bottom: -12px;
              left: 0;
              width: 100%;
              height: 1px;
              content: "";
              background: $color-black-01;
            }

            &:hover {
              background-color: $color-black-01;
              border-radius: 12px;
            }

            .left {
              display: flex;
              column-gap: 8px;
              align-items: center;
              width: 100%;

              .tabler-icon {
                width: 18px;
                height: 18px;
                margin: 11px;
                color: $color-black-40;
              }

              p {
                &:first-child {
                  width: 185px;
                  margin-bottom: 5px;
                  overflow: hidden;
                  font-size: 14px;
                  font-weight: 500;
                  line-height: normal;
                  color: $color-black-100;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                &:last-child {
                  width: 185px;
                  margin-bottom: 0;
                  overflow: hidden;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: normal;
                  color: $color-black-40;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }

            .right {
              position: absolute;
              right: 15px;
            }
          }
        }
      }
    }

    .navbar-switch-app {
      position: relative;
      display: flex;
      column-gap: 10px;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 8px;

      .show-title {
        font-size: 14px;
        font-weight: 500;
        color: $color-black-100;
      }

      .img-product {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
      }

      .tabler-icon-chevron-down {
        color: $color-black-50;
      }

      .dropdown-switch-app {
        position: absolute;
        top: 56px;
        right: 0;
        display: none;
        width: 320px;
        background-color: $color-white;
        border-radius: 12px;
        box-shadow: 0 2px 8px 0 rgb(18 18 18 / 12%);

        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid $color-black-10;

          p {
            font-size: 14px;
            font-weight: 700;
            color: $color-black-100;
          }
        }

        .body {
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: auto;
          max-height: 410px;
          padding: 10px;
          overflow-y: auto;

          .list {
            display: flex;
            gap: 12px;
            align-items: center;
            padding: 12px 15px;
            border-radius: 12px;

            &:hover {
              background: $color-black-01;
            }

            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
              object-position: center;
            }

            span {
              width: 100%;

              .title {
                font-size: 14px;
                font-weight: 500;
                color: $color-black-100;
              }

              .sub-title {
                display: -webkit-box !important;
                overflow: hidden;
                font-size: 12px;
                color: $color-black-40;
                text-overflow: ellipsis;
                white-space: normal;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
            }

            .tabler-icon-check {
              min-width: 24px;
              min-height: 24px;
              color: $color-green;
            }
          }
        }
      }
    }
  }
}

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
