<template>
    <div class="parent">
        <div class="login">
            <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" :size="size">
            <n-form-item label="账号" path="user.name">
                <n-input v-model:value="formValue.user.name" placeholder="输入账号" />
            </n-form-item>
            <n-form-item label="密码" path="user.age">
                <n-input v-model:value="formValue.user.age" placeholder="输入密码" />
            </n-form-item>
            <n-form-item label="确认密码" path="phone">
                <n-input v-model:value="formValue.phone" placeholder="确认密码" />
            </n-form-item>
            <n-form-item>
                <n-button attr-type="button" @click="handleValidateClick">
                    登录
                </n-button>
            </n-form-item>
        </n-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type FormInst, useMessage } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
let size = ref<'small' | 'medium' | 'large'>('medium')
let formValue = ref({
    user: {
        name: '',
        age: ''
    },
    phone: ''
})
let rules = {
    user: {
        name: {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
        },
        age: {
            required: true,
            message: '请输入密码',
            trigger: ['input', 'blur']
        }
    },
    phone: {
        required: true,
        message: '请输入电话号码',
        trigger: ['input']
    }
}
let handleValidateClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success('Valid')
        } else {
            console.log(errors)
            message.error('Invalid')
        }
    })
}

</script>

<style lang="scss" scoped>
.parent {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(50, 48, 197);
    .login {
    width: 30%;
    text-align: center;
    margin: 12% auto 0;
}
}
</style>