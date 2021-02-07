<template>
  <div class="create-post-page">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules" v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">{{isEditMode ? '更新文章' : '发表文章'}}
        </button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

export default defineComponent({
  name: 'createPost',
  props: {
    msg: String
  },
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const route = useRoute()
    /// 定义新建还是编辑页面
    const isEditMode = !!route.query.id

    /// 规则
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
    const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]

    const titleVal = ref('')
    const contentVal = ref('')

    /// 提交/更新表单
    const onFormSubmit = (result: boolean) => {
      if (result) {

      }
    }
    return {
      isEditMode,
      onFormSubmit,
      titleRules,
      contentRules,
      titleVal,
      contentVal
    }
  }
})
</script>
