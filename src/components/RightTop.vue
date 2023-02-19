<template>
    <div>
        <el-icon @click="ck">
            <Expand v-if="$store.state.HomeModule.navBool" />
            <Fold v-else />
        </el-icon>
    </div>
</template>

<script setup>
import {
    Expand,
    Fold
} from '@element-plus/icons-vue'
// import { ref } from "vue"
// let bool = ref(true)
import {useStore} from "vuex"
let store = useStore()
let ck=()=>{
    store.commit("SET_NAV_BOOL")
}

</script>

<style lang="scss">
    .el-header {
        line-height: 70px;
        .el-icon  {
            font-size: 20px;
        }
    }
</style>