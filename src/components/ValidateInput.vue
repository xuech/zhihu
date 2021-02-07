<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag !== 'textarea'"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    >
    <textarea
      v-else
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    >
    </textarea>
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, reactive, onMounted } from 'vue'
import { emitter, emitterName } from './ValidateForm.vue'

interface RuleProp {
  type: 'required' | 'email' | 'custom';
  message: string;
  validator?: () => boolean;
}

/// 导出给外界用的
export type RulesProp = RuleProp[]

export type TagType = 'input' | 'textarea'

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    /// 1、input需要添加的属性
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  /// 用来绑定根元素的内容，placehold，同时在input上v-bind="$attrs"
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })

    // 校验input规则
    const validateInput = () => {
      const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          // 设置提示语
          inputRef.message = rule.message
          // 根据类型判断是否能过
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    onMounted(() => {
      emitter.emit(emitterName, validateInput)
    })
    return {
      inputRef,
      validateInput
    }
  }
})
</script>
