<template>
  <div class="container">
    <div class="itemleft">
      <ItemPageVue>
        <template #main>
          <OneVue></OneVue>
        </template>
      </ItemPageVue>
      <ItemPageVue>
        <template #main>
          <TwoVue></TwoVue>
        </template>
      </ItemPageVue>
    </div>
    <div class="itemright">
      <ItemPageVue>
        <template #main>
          <ThreeVue></ThreeVue>
        </template>
      </ItemPageVue>
      <ItemPageVue>
        <template #main>
          <FourVue></FourVue>
        </template>
      </ItemPageVue>
    </div>
  </div>
</template>

<script setup>
import ItemPageVue from "@/components/ItemPage.vue";
import OneVue from "@/components/One.vue";
import TwoVue from "@/components/Two.vue";
import ThreeVue from "@/components/Three.vue";
import FourVue from "@/components/Four.vue";
</script>

<style lang="scss">
  .container {
    width: 100%;
    margin: 0 auto;
    background-color: gray;
    display: flex;
    .itemleft,.itemright {
        flex: 1;
    }
  }
</style>