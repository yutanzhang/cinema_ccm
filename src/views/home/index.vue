<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <LM/>
            </el-aside>
            <el-container>
                <el-header>
                    <RT></RT>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import LM from "../../components/LeftMenu.vue"
import RT from "../../components/RightTop.vue"
</script>

<style lang="scss">
    .el-aside {
        background-color: #545c64;
    }
    .el-header {
        background-color: rgb(183, 183, 183);
    }
    .el-main {
        background-color: gainsboro;
    }
    .el-aside,.el-container,.common-layout,#app,body,html {
        height: 100%;
    }
</style>