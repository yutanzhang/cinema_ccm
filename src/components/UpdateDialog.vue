<template>
    <el-dialog v-model="$store.state.HomeModule.displayDialog" title="请输入修改信息">
        <el-form :model="form">
            <el-form-item label="楼盘名称" :label-width="formLabelWidth">
                <el-input v-model="form.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="房源类型" :label-width="formLabelWidth">
                <el-input v-model="form.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="房源户型" :label-width="formLabelWidth">
                <el-input v-model="form.hometype" autocomplete="off" />
            </el-form-item>
            <el-form-item label="门牌号" :label-width="formLabelWidth">
                <el-input v-model="form.num" autocomplete="off" />
            </el-form-item>
            <el-form-item label="户主" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="closeDialog(0)">取消</el-button>
                <el-button type="primary" @click="closeDialog(1)">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import link from '@/api/link';
import apiUrl from '@/api/url';
import { reactive, ref } from 'vue'
import {useStore} from "vuex"
let store = useStore();

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    title: '',
    type: '',
    hometype:'',
    num: '',
    name: '',
})

let closeDialog=(num:number)=>{
    console.log(form.name + "-----" + form.addr) // 需要修改的结果
    store.commit("CLOSE_DIALOG")
    if(num == 1) {
        let data = {
            title: form.title,
            type: form.type,
            hometype: form.hometype,
            num: form.num,
            name: form.name
        }
        console.log(store.state.HomeModule.uplistData.id) //要修改的key
        link(apiUrl.userList + "/" + store.state.HomeModule.uplistData.id, "put", data,{})
        .then((ok)=>{
            console.log(ok)
        })
    }
}

</script>
<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

/* .el-input {
    width: 300px;
} */

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>