<template>
  <div class="item">
    <slot name="main"></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
    .item {
        height: 5.125rem;
        // border: 1px solid rgb(161, 161, 161);
        margin: 0.25rem;
        background-color: rgba(190, 190, 190, 0.8);
    }
</style>