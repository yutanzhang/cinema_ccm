<template>
  <div>
    <n-button>naive-ui</n-button>
    使用特殊类型的字体
    <n-button @click="countAdd()">count: {{ count }}</n-button>
    <n-button>doubleCount: {{ doubleCount }}</n-button>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore();
let {count, doubleCount} = storeToRefs(store);
let countAdd = () => {
  store.count++;
}

</script>

<style scoped>

</style>