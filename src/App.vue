<template>
  <!--路由出口-->
  <router-view/>
</template>

<script setup>
import * as echarts from "echarts"
import {provide} from "vue"
provide("echarts",echarts)
</script>


<style lang="scss">
// head,body {
//   font-family: "Microsoft YaHei",Arial, Helvetica, sans-serif,"宋体";
//   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
// }
</style>
