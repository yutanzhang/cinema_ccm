<template>
    <div class="login">
        <div class="login-con">
            <ul class="menu-tab">
                <li v-for="v in menuData" :class="{ current: v.current }" :key="v.type" @click="clickMenu(v)">
                    {{ v.txt }}
                </li>
            </ul>
            <!--表单部分-->
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
                <el-form-item prop="username">
                    <label>账号</label>
                    <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
                </el-form-item>
                <el-form-item prop="password">
                    <label>密码</label>
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" minlength="6"
                        maxlength="15" />
                </el-form-item>
                <el-form-item prop="checkPass" v-show="model === 'register'">
                    <label>确认密码</label>
                    <el-input v-model="ruleForm.checkPass" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn block" @click="submitForm(ruleFormRef)">{{ model===
                    'login' ? '登录' : '注册' }}</el-button>
                </el-form-item>
            </el-form>
            <!--表单部分-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance, ElMessage } from 'element-plus'
import * as ck from '../../utils/verification.js'
import link from "../../api/link.js"
import apiUrl from "../../api/url.js"

const menuData = reactive([
    { txt: "登录", current: true, type: "login" },
    { txt: "注册", current: false, type: "register" }
])

onMounted(() => {
    console.log(process.env.VUE_APP_API)
})

let model = ref("login");

let clickMenu = (item: any) => {
    menuData.forEach((ele) => {
        ele.current = false;
    })
    item.current = true;
    // 修改保存点击的状态
    model.value = item.type;
}

// elementplus 表单部分
const ruleFormRef = ref<FormInstance>()

const checkUser = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('账号不能为空'))
    } else if (ck.checkUser(value)) {
        return callback(new Error("账号格式不正确"))
    } else {
        callback();
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (!value) {
        callback(new Error('密码不能为空'))
    } else if (ck.checkPassword(value)) {
        callback(new Error("密码格式不正确"))
    } else {
        callback()
    }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
    // 如果是登录则不进行重复密码的校验
    if (model.value === 'login') {
        callback();
    }
    if (!value) {
        callback(new Error('确认密码不能为空'))
    } else if (value !== ruleForm.password) {
        callback(new Error("两次密码必须相同"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '',
    password: '',
    checkPass: ''
})

const rules = reactive({
    username: [{ validator: checkUser, trigger: 'blur' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            if (model.value === "login") {
                console.log("登录")
            } else {
                console.log("注册")
                let data = {
                    name: ruleForm.username,
                    pwd: ruleForm.password
                }
                link(apiUrl.register, "post", data).then((ok: any) => {
                    console.log(ok);
                    if (Object.keys(ok.data).length !== 0) {
                        ElMessage({
                            message: '注册成功',
                            type: 'success',
                        });
                        model.value = "login";
                        menuData.forEach(v => {
                            v.current = false
                        });
                        menuData[0].current = true;
                    } else {
                        ElMessage.error(
                            '注册失败'
                        )
                    }
                })
            }
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
// elementplus 表单部分

</script>

<style lang="scss">
.login {
    height: 100%;
}

html,
body,
#app {
    height: 100%;
}

.menu-tab {
    text-align: center;

    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: rgb(0, 0, 0);
        border-radius: 2px;
    }

    .current {
        background-color: rgb(42, 134, 255);
    }
}

.demo-ruleForm {
    width: 30%;
    margin: 50px auto;

    label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
    }

    .block {
        display: block;
        width: 100%;
    }

    .login-btn {
        margin-top: 20px;
    }
}
</style>