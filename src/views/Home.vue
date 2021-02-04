<template>
  <div>
        <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'iOS',
    avatar: '',
    description: '这是移动端'
  },
  {
    id: 2,
    title: 'Android',
    avatar: '',
    description: '这是移动端'
  },
  {
    id: 3,
    title: 'Vue',
    avatar: '',
    description: '这是PC端'
  },
  {
    id: 4,
    title: 'React',
    avatar: '',
    description: '这是PC端'
  }
]

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>
