<template>
<div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props: { 
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

.recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    border-bottom: 8px solid #eee;
    padding: 10px 0 20px;
}
.recommendItem {
    flex: 1;
}
.recommendItem img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px
} 
</style>