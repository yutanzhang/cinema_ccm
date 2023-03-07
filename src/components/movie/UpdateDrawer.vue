<template>
    <el-drawer v-model="displayUpdate" :direction="direction" :before-close="handleClose">
        <template #header>
            <h4>影片详情</h4>
        </template>
        <template #default>
            <el-form :model="form">
                <el-form-item label="影片名称" :label-width="formLabelWidth">
                    <el-input v-model="form.mvName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="影片类型" :label-width="formLabelWidth">
                    <el-input v-model="form.categoryId" autocomplete="off" />
                </el-form-item>
                <el-form-item label="出厂地区" :label-width="formLabelWidth">
                    <el-input v-model="form.mvArea.value" autocomplete="off" />
                </el-form-item>
                <el-form-item label="演员列表" :label-width="formLabelWidth">
                    <el-input v-model="form.actorList" autocomplete="off" />
                </el-form-item>
                <el-form-item label="导演列表" :label-width="formLabelWidth">
                    <el-input v-model="form.directorList" autocomplete="off" />
                </el-form-item>
                <el-form-item label="图片地址" :label-width="formLabelWidth">
                    <el-input v-model="form.picture" autocomplete="off" />
                </el-form-item>
                <el-form-item label="评分" :label-width="formLabelWidth">
                    <el-input v-model="form.score" autocomplete="off" />
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-radio-group v-model="form.state.value" class="ml-4">
                        <el-radio :label=1 border>有效</el-radio>
                        <el-radio :label=0 border>无效</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick(0)">取消</el-button>
                <el-button type="primary" @click="cancelClick(1)">确认</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from "vuex"
import link from '@/api/link';
import apiUrl from '@/api/url';
let store = useStore();

let displayUpdate = computed(() => store.state.MovieModule.displayUpdate);
let form = computed(() => {
    return store.state.MovieModule.updateMovie;
})

const direction = ref('rtl')
const formLabelWidth = '75px'

const handleClose = (done: () => void) => {
    store.commit("CLOSE_EDIT")
}

function cancelClick(num: number) {
    store.commit("CLOSE_EDIT")
    if (num == 1) {
        console.log(form)
        link(apiUrl.movie.updateMovie, "post", form, {})
            .then((ok) => {
                console.log(ok)
            })
    }
}
</script>

<style lang="scss"></style>