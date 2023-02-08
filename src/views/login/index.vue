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
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item prop="checkPass" v-show="model==='register'">
                    <label>确认密码</label>
                    <el-input v-model.number="ruleForm.checkPass" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn block" @click="submitForm(ruleFormRef)">{{ model=== 'login' ?'登录':'注册' }}</el-button>
                </el-form-item>
            </el-form>
            <!--表单部分-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const menuData = reactive([
    { txt: "登录", current: true, type: "login" },
    { txt: "注册", current: false, type: "register" }
])

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

const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== ruleForm.pass) {
        callback(new Error("Two inputs don't match!"))
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
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
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