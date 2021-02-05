<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export const emitterName = 'form-item-created'

/// 子组件是否校验通过
type ValidateFunction = () => boolean

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    /// 存放所有子组件的校验字段
    let funcArr: ValidateFunction[] = []

    /// 提交按钮事件
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (e?: ValidateFunction) => {
      if (e) {
        funcArr.push(e)
      }
    }

    /// 1、创建监听函数的回调
    emitter.on(emitterName, callback)

    /// 2、销毁该监听函数
    onUnmounted(() => {
      emitter.off(emitterName, callback)
      funcArr = []
    })

    return {
      submitForm

    }
  }
})
</script>
