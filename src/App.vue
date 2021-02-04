<template>
  <div class="container">
    <GlobalHeader :user='userData'/>
    <ColumnList :list="list"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
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
const userData: UserProps = {
  isLogin: true,
  name: 'xch',
  nickName: 'xch'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      userData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
