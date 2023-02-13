<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .el-aside {
        background-color: rgb(150, 217, 219);
    }
    .el-header {
        background-color: rgb(183, 183, 183);
    }
    .el-aside,.el-container,.common-layout,#app,body,html {
        height: 100%;
    }
</style>