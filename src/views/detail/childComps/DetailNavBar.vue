<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" >
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             class="titles-item"
             :class="{active:index === curryIndex}"
             @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      curryIndex : 0
    }
  },
  methods:{
    titleClick(index){
        this.curryIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles {
  display: flex;
  font-size: 13px;
}
.titles-item {
  flex: 1;
}
.active {
  color: var(--color-high-text)
}
.back img{
  margin-top: 12px;
}
</style>