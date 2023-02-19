<template>
    <!-- 列表 -->
    <div>
        <el-table :data="$store.state.MovieModule.movieList.records" border style="width: 100%" size="large">
            <el-table-column prop="movieId" label="影片id" />
            <el-table-column show-overflow-tooltip="true" prop="mvName" label="影片名称" />
            <el-table-column show-overflow-tooltip="true" prop="createTime" label="上映时间" />
            <el-table-column show-overflow-tooltip="true" prop="updateTime" label="更新时间" />
            <el-table-column prop="categoryName" label="影片类型" />
            <el-table-column prop="mvArea.description" label="出厂地区" />
            <el-table-column show-overflow-tooltip="true" prop="actorList" label="演员列表" />
            <el-table-column show-overflow-tooltip="true" prop="directorList" label="导演列表" />
            <el-table-column show-overflow-tooltip="true" prop="picture" label="图片地址" />
            <el-table-column prop="score" label="评分" />
            <el-table-column prop="state.description" label="状态" />
        </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="$store.state.MovieModule.movieList.total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import link from '@/api/link';
import apiUrl from '@/api/url';
import { useStore } from 'vuex';
let store = useStore();

interface MovieListDTO {
    mvName: string,
    mvType: number,
    mvArea: number,
    mvYear: number,
    current: number,
    size: number
}

onMounted(() => {
    let data = {
        current: currentPage.value,
        size: pageSize.value
    }
    store.dispatch("REFRESH_MOVIE_LIST", data)
})

const currentPage = ref(1)
const pageSize = ref(12)

const handleSizeChange = (val: number) => {
    pageSize.value = val;
}
const handleCurrentChange = (val: number) => {
    currentPage.value = val;
}

</script>

<style lang="scss">
el-table {
    .cell {
        white-space: nowrap;
    }
}
</style>