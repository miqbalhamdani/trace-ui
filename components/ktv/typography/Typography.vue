<script setup>
defineProps({
  d1: {
    type: String,
    default: "",
  },
  d2: {
    type: String,
    default: "",
  },
  d3: {
    type: String,
    default: "",
  },
  h1: {
    type: String,
    default: "",
  },
  h2: {
    type: String,
    default: "",
  },
  h3: {
    type: String,
    default: "",
  },
  t1: {
    type: String,
    default: "",
  },
  t2: {
    type: String,
    default: "",
  },
  t3: {
    type: String,
    default: "",
  },
  l1: {
    type: String,
    default: "",
  },
  l2: {
    type: String,
    default: "",
  },
  l3: {
    type: String,
    default: "",
  },
  b1: {
    type: String,
    default: "",
  },
  b2: {
    type: String,
    default: "",
  },
  b3: {
    type: String,
    default: "",
  },
  fontWeight: {
    type: String,
    default: "400",
  },
});
</script>

<template>
  <component
    :is="'d1'"
    v-if="d1"
    :d1="d1"
    class="d1"
    :style="{ fontWeight: fontWeight }"
  >
    {{ d1 }}
  </component>
  <component
    :is="'d2'"
    v-else-if="d2"
    :d2="d2"
    class="d2"
    :style="{ fontWeight: fontWeight }"
  >
    {{ d2 }}
  </component>
  <component
    :is="'d3'"
    v-else-if="d3"
    :d3="d3"
    class="d3"
    :style="{ fontWeight: fontWeight }"
  >
    {{ d3 }}
  </component>

  <component
    :is="'h1'"
    v-else-if="h1"
    :h1="h1"
    class="h1"
    :style="{ fontWeight: fontWeight }"
  >
    {{ h1 }}
  </component>
  <component
    :is="'h2'"
    v-else-if="h2"
    :h2="h2"
    class="h2"
    :style="{ fontWeight: fontWeight }"
  >
    {{ h2 }}
  </component>
  <component
    :is="'h3'"
    v-else-if="h3"
    :h3="h3"
    class="h3"
    :style="{ fontWeight: fontWeight }"
  >
    {{ h3 }}
  </component>

  <component
    :is="'t1'"
    v-else-if="t1"
    :t1="t1"
    class="t1"
    :style="{ fontWeight: fontWeight }"
  >
    {{ t1 }}
  </component>
  <component
    :is="'t2'"
    v-else-if="t2"
    :t2="t2"
    class="t2"
    :style="{ fontWeight: fontWeight }"
  >
    {{ t2 }}
  </component>
  <component
    :is="'t3'"
    v-else-if="t3"
    :t3="t3"
    class="t3"
    :style="{ fontWeight: fontWeight }"
  >
    {{ t3 }}
  </component>

  <component
    :is="'l1'"
    v-else-if="l1"
    :l1="l1"
    class="l1"
    :style="{ fontWeight: fontWeight }"
  >
    {{ l1 }}
  </component>
  <component
    :is="'l2'"
    v-else-if="l2"
    :l2="l2"
    class="l2"
    :style="{ fontWeight: fontWeight }"
  >
    {{ l2 }}
  </component>
  <component
    :is="'l3'"
    v-else-if="l3"
    :l3="l3"
    class="l3"
    :style="{ fontWeight: fontWeight }"
  >
    {{ l3 }}
  </component>

  <component
    :is="'b1'"
    v-else-if="b1"
    :b1="b1"
    class="b1"
    :style="{ fontWeight: fontWeight }"
  >
    {{ b1 }}
  </component>
  <component
    :is="'b2'"
    v-else-if="b2"
    :b2="b2"
    class="b2"
    :style="{ fontWeight: fontWeight }"
  >
    {{ b2 }}
  </component>
  <component
    :is="'b3'"
    v-else-if="b3"
    :b3="b3"
    class="b3"
    :style="{ fontWeight: fontWeight }"
  >
    {{ b3 }}
  </component>
</template>

<style lang="scss" scoped>
@import "./typography";
</style>
