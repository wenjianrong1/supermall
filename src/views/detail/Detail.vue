<template>
<div>
  详情页
</div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.id
    console.log(this.iid);
  }
}
</script>

<style scoped>

</style>