<template><!-- 列表 -->
    <div>
        <el-table :data="$store.state.MovieModule.movieList.records" style="width: 100%" size="large" stripe
            :header-cell-style="headerRowStyle" :cell-style="cellStyle">
            <el-table-column prop="movieId" label="影片id" />
            <el-table-column show-overflow-tooltip="true" prop="mvName" label="影片名称" />
            <el-table-column show-overflow-tooltip="true" prop="createTime" label="创建时间" />
            <el-table-column show-overflow-tooltip="true" prop="updateTime" label="更新时间" />
            <el-table-column prop="categoryName" label="影片类型" />
            <el-table-column prop="mvArea.description" label="出厂地区" />
            <el-table-column show-overflow-tooltip="true" prop="actorList" label="演员列表" />
            <el-table-column show-overflow-tooltip="true" prop="directorList" label="导演列表" />
            <el-table-column show-overflow-tooltip="true" prop="picture" label="图片地址" />
            <el-table-column prop="score" label="评分" />
            <el-table-column prop="state.description" label="状态" />
            <el-table-column label="操作" fixed="right" width="190">
                <template #default="scope">
                    <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <br/>
    <!-- 分页 -->
    <el-pagination background v-model:current-page="currentPage" v-model:page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="$store.state.MovieModule.movieList.total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 修改弹出框 -->
    <UpdateDialog />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
let store = useStore();

// 表格数据加载
interface MovieListDTO {
    mvName: string,
    mvType: number,
    mvArea: number,
    mvYear: number,
    current: number,
    size: number
}

const currentPage = ref(1)
const pageSize = ref(10)

let refreshList = () => {
    let data = {
        current: currentPage.value,
        size: pageSize.value
    }
    store.dispatch("REFRESH_MOVIE_LIST", data)
}

onMounted(() => {
    refreshList();
})

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    refreshList();
}
const handleCurrentChange = (val: number) => {
    currentPage.value = val;
    refreshList();
}
// 表格数据加载

// 表格操作
interface User {
  date: string
  name: string
  address: string
}
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
  store.commit("SET_DIALOG",row)
}

const handleDelete = (index: number, row: User) => {
  console.log(index, row),
  store.dispatch("DEL_DIALOG",row)
}
// 表格操作

// 表格样式
let headerRowStyle = (row) => {
    return {
        backgroundColor: "rgb(64,158,225)",
        color: "#fff",
        height: "65px",
        fontSize: "16px",
        fontFamily: "Microsoft YaHei"
    };
}

let cellStyle = ({ row, column, rowIndex, columnIndex }: never) => {
    let data = {
        height: "55px",
        color: "#222",
        fontFamily: "Microsoft YaHei"
    }
    return data;
}
// 表格样式

</script>

<style lang="scss">
el-table {
    .cell {
        white-space: nowrap;
    }
}
</style>