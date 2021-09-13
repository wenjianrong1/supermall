<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import {getDetail,Goods} from 'network/detail';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },

  created() {
    //保存传入的ID
    this.iid = this.$route.params.id;
    getDetail(this.iid).then(res => {
      const data = res.result;
      //获取顶部图片轮播数据
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      console.log(data);
      console.log(this.goods);
    })
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>