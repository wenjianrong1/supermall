<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="table-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
}
.table-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-hign-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>