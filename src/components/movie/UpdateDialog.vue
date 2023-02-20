<template>
    <el-dialog v-model="$store.state.MovieModule.displayUpdate" title="请输入修改信息">
        <el-form :model="form">
            <el-form-item label="影片名称" :label-width="formLabelWidth">
                <el-input v-model="form.mvName" autocomplete="off" />
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
import { computed, reactive, ref } from 'vue'
import { mapState, useStore } from "vuex"

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

let store = useStore();

const form = reactive({
    movieId: '',
    mvName: ''
})

let closeDialog = (num: number) => {
    store.commit("CLOSE_EDIT")
    if (num == 1) {
        form.movieId = store.state.MovieModule.updateMovie.movieId;
        console.log(form)
        link(apiUrl.movie.updateMovie, "post", form, {})
            .then((ok) => {
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

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>