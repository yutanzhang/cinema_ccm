<template>
  <div>
    <el-table :data="tableData.listdata.slice((currentPage4 - 1) * pageSize4, pageSize4 * currentPage4)"
      style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="title" label="楼盘名称" />
      <el-table-column prop="type" label="房源类型" />
      <el-table-column prop="num" label="门牌号" />
      <el-table-column prop="hometype" label="房源户型" />
      <el-table-column prop="name" label="户主" />
      <el-table-column>
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入查询内容" @blur="searchLink" />
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      layout="total, sizes, prev, pager, next, jumper" :total="tableData.listdata.length"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script lang="ts" setup>

import link from '@/api/link';
import apiUrl from '@/api/url';
import { ref, onMounted, reactive } from 'vue'

const currentPage4 = ref(1)
const pageSize4 = ref(12)

const handleSizeChange = (val: number) => {
  pageSize4.value = val;
}
const handleCurrentChange = (val: number) => {
  currentPage4.value = val;
}

let tableData = reactive({
  listdata: []
})

let initUserList = () => {
  link(apiUrl.userList).then((ok: any) => {
    console.log(ok)
    tableData.listdata = ok.data
  })
}
onMounted(initUserList)

let search = ref("")
let searchLink = () => {
  console.log(search)
  if (search.value == "") {
    console.log("初始化")
    initUserList()
  } else {
    link(apiUrl.userList, "get", {}, { name: search.value }).then((ok: any) => {
      tableData.listdata = ok.data;
    })
  }
}

</script>

<style>

</style>