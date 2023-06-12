<template>
  <view class="content"> </view>
</template>

<script>
import { getBanner } from "@/api/home.js";
export default {
  data() {
    return {};
  },
  onLoad() {
    // this.getBannerList()
  },
  methods: {
    async getBannerList() {
      try {
        const res = await getBanner();
        console.log(res);
      } catch {
      } finally {
      }
    },
  },
};
</script>

<style lang="scss"></style>
