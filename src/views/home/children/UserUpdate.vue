<template>
  <div>
    <el-table :data="$store.state.HomeModule.listdata.slice((currentPage4 - 1) * pageSize4, pageSize4 * currentPage4)"
      style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="title" label="楼盘名称" />
      <el-table-column prop="type" label="房源类型" />
      <el-table-column prop="num" label="门牌号" />
      <el-table-column prop="hometype" label="房源户型" />
      <el-table-column prop="name" label="户主" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      layout="total, sizes, prev, pager, next, jumper" :total="$store.state.HomeModule.listdata.length"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 修改弹出框 -->
    <UpdateDialog />
  </div>
</template>

<script lang="ts" setup>

import link from '@/api/link';
import apiUrl from '@/api/url';
import { ref, onMounted, reactive } from 'vue'
import UpdateDialog from '@/components/UpdateDialog.vue';
import {useStore} from 'vuex';
let store = useStore();

const currentPage4 = ref(1)
const pageSize4 = ref(12)

const handleSizeChange = (val: number) => {
  pageSize4.value = val;
}
const handleCurrentChange = (val: number) => {
  currentPage4.value = val;
}

onMounted(
  ()=>{
    store.dispatch("USERUPDATE_LIST")
  }
)

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

</script>

<style>

</style>