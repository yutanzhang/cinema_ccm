<template>
  <div>
    <h2>报修统计</h2>
    <div id="chartThree" class="three">

    </div>
  </div>
</template>

<script setup>
import link from "@/api/link"
import apiUrl from "@/api/url"
import { inject, onMounted, reactive } from "vue"

let $echarts = inject("echarts")

onMounted(() => {
  let chartThree = $echarts.init(document.getElementById("chartThree"))
  link(apiUrl.chartThree).then((ok) => {
    console.log(ok);
    chartThree.setOption({
      tooltip: {},
      legend: {
        top: "bottom"
      },
      series: {
        type: "pie",
        data: ok.data,
        radius: [10,100],
        center: ["50%","45%"],
        roseType: "area"
      }
    })
  })
})

</script>

<style lang="scss" scoped>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}

.three {
  height: 4.5rem;
}
</style>