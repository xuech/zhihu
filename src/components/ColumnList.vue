<template>
  <div class="row">
    <div v-for="column in colunmList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar" :alt="column.title" class="rounded-circle border border-light my-3" >
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
/**
 * @description 接收的参数类型
 * @param {string} title 名称
 * @param {string} avatar 头像字段,可选
 * @param {string} description 描述文字
 */
export interface ColumnProps {
  title: string;
  avatar?: string;
  description: string;
  id: number;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const colunmList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      colunmList
    }
  }

})
</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
