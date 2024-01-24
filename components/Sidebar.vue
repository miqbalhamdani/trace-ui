<template>
  <div>
    <div class="custom-sidebar-container">
      <div class="logo-container">
        <img
          src="/images/logo-koltitrace-mis.svg"
          class="img-logo"
        />
      </div>
      <label>survey</label>
      <ul>
        <li
          v-for="(i, index) in dataSurvey"
          :key="index"
        >
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <!-- <img :src="i.images" alt="" /> -->
            <img
              :src="i.images"
              alt=""
            />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider" />
      <label>coaching & training</label>
      <ul>
        <li
          v-for="(i, index) in dataCoachingTraining"
          :key="index"
        >
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <img
              :src="i.images"
              alt=""
            />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider" />
      <label>traceability</label>
      <ul>
        <li
          v-for="(i, index) in dataTraceability"
          :key="index"
        >
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <img
              :src="i.images"
              alt=""
            />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider-end" />
      <div class="sidebar-bottom">
        <IconArrowNarrowUp />
        <p>You have reached the end of the side menu</p>
      </div>
    </div>
    <div
      class="custom-second-sidebar"
      @mouseenter="showSecondSidebar"
      @mouseleave="hideSecondSidebar"
    >
      <div class="mb-20">
        <div class="custom-second-sidebar-title">Dashboard</div>
        <label class="custom-second-sidebar-subtitle">Survey:</label>
        <div class="custom-second-sidebar-list active">
          <p>Family and Labor</p>

          <IconInfoCircle
            v-tippy="{
              content: 'Lorem ipsum dolor sit amet consectetur ',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Land Use Change GHG Emissions</p>
          <IconInfoCircle
            v-tippy="{
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Program KPI (General)</p>
          <IconInfoCircle
            v-tippy="{
              trigger: 'click',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Plot Basic</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Producer Demographic</p>
          <IconInfoCircle />
        </div>
        <label class="custom-second-sidebar-subtitle">Training:</label>
        <div class="custom-second-sidebar-list">
          <p>Producer Training and Coaching</p>
          <IconInfoCircle />
        </div>
        <label class="custom-second-sidebar-subtitle">Seed to Table:</label>
        <div class="custom-second-sidebar-list">
          <p>Seed to Table Traceability</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Traceability</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Transaction Stock</p>
          <IconInfoCircle />
        </div>
      </div>
      <div class="mb-20">
        <div class="custom-second-sidebar-title">Report</div>
        <div class="custom-second-sidebar-list">
          <p>Data User Sync</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Log Activity User</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Producer Transaction</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Standard Report</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Traceability Transaction</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Survey</p>
          <IconInfoCircle />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "tippy.js/dist/tippy.css";

import { IconArrowNarrowUp, IconChevronRight, IconInfoCircle } from "@tabler/icons-vue";

import IconAgronomist from "@/assets/icon/agronomist.svg";
import IconAssessment from "@/assets/icon/assessment.svg";
import IconBusiness from "@/assets/icon/business.svg";
import IconGroup from "@/assets/icon/group.svg";
import IconMap from "@/assets/icon/maps.svg";
import IconDashboardReport from "@/assets/icon/pie-chart.svg";
import IconProducers from "@/assets/icon/producer.svg";
const showSecondSidebar = () => {
  const secondSidebar = document.querySelector(".custom-second-sidebar");
  if (secondSidebar) {
    secondSidebar.style.display = "block";
  }
};
const hideSecondSidebar = () => {
  const secondSidebar = document.querySelector(".custom-second-sidebar");
  if (secondSidebar) {
    secondSidebar.style.display = "none";
  }
};
const dataSurvey = [
  {
    name: "Dashboard & Report",
    images: IconDashboardReport,
  },
  {
    name: "Map",
    images: IconMap,
  },
  {
    name: "Producers",
    images: IconProducers,
  },
  {
    name: "Business",
    images: IconBusiness,
  },
  {
    name: "Group",
    images: IconGroup,
  },
  {
    name: "Agronomist",
    images: IconAgronomist,
  },
  {
    name: "Assessment",
    images: IconAssessment,
  },
];
const dataCoachingTraining = [
  {
    name: "Action Plan",
    images: IconDashboardReport,
  },
  {
    name: "Training & Coahing",
    images: IconMap,
  },
  {
    name: "Interactions",
    images: IconProducers,
  },
];
const dataTraceability = [
  {
    name: "Traceability",
    images: IconDashboardReport,
  },
  {
    name: "Traceability Reference",
    images: IconMap,
  },
  {
    name: "Traceability Import Data",
    images: IconProducers,
  },
  {
    name: "Business",
    images: IconBusiness,
  },
  {
    name: "Warehouse",
    images: IconGroup,
  },
];
</script>

<style lang="scss" scoped>
.custom-sidebar-container {
  position: fixed;
  float: left;
  width: 240px;
  height: 100%;
  padding: 0 0 30px;
  overflow-y: auto;
  color: rgba($color: $color-white, $alpha: 50%);
  background-color: $color-black-80;

  &::-webkit-scrollbar {
    width: 0;
  }

  .logo-container {
    // padding: 38px 20px 28px 20px;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 90px;
    padding: 0 20px;
    background: $color-black-80;

    .img-logo {
      height: 50px;
    }
  }

  label {
    padding: 0 20px;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 600;
    color: rgba($color: $color-white, $alpha: 30%);
    text-transform: uppercase;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;

    li {
      list-style: none;
    }
  }

  .list-menu {
    position: relative;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 12px 20px;

    span {
      display: -webkit-box;
      width: 100%;
      overflow: hidden;
      font-size: 14px;
      font-weight: 500;
      text-overflow: ellipsis;
      word-break: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    img {
      filter: invert(50%);
    }

    &:hover {
      color: $color-white;
      background: $color-black-hover;

      svg g {
        opacity: 1;
      }

      img {
        filter: brightness(0) invert(1) !important;
      }
    }

    .tabler-icon-chevron-right {
      min-width: 16px;
      max-width: 16px;
      min-height: 16px;
      max-height: 16px;
    }
  }

  .sidebar-bottom {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 10px;

    svg {
      min-width: 24px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      color: rgba($color: $color-white, $alpha: 50%);
      text-align: center;
    }
  }
}

/* second sidebar */
.custom-second-sidebar {
  position: fixed;
  top: 0;
  left: 240px;
  z-index: 999;
  float: left;
  width: 262px;
  height: 100%;
  padding: 30px 0;

  // display: none;
  overflow-y: auto;
  color: rgba($color: $color-white, $alpha: 50%);
  background-color: $color-black-hover;
  box-shadow: 0 40px 60px 0 rgba($color: $color-black-100, $alpha: 8%);

  .custom-second-sidebar-title {
    padding-bottom: 10px;
    margin: 10px 14px;
    overflow: hidden;
    font-size: 12px;
    font-weight: 600;
    color: $color-white;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($color: $color-white, $alpha: 20%);
  }

  .custom-second-sidebar-subtitle {
    margin: 10px 14px 6px;
    font-size: 14px;
    font-weight: 500;
    color: rgba($color: $color-white, $alpha: 30%);
    text-transform: capitalize;

    ~ .custom-second-sidebar-list {
      padding: 10px 14px 10px 36px;
    }
  }

  .custom-second-sidebar-list {
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    color: rgba($color: $color-white, $alpha: 50%);
    text-overflow: ellipsis;
    white-space: nowrap;

    p {
      display: -webkit-box !important;
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .tabler-icon {
      min-width: 16px;
      max-width: 16px;
      min-height: 16px;
      max-height: 16px;
    }

    &:hover {
      cursor: pointer;
      background-color: $color-black-80;
    }
  }
}
</style>
