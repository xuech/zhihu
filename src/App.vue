<template>
  <div class="container">
    <GlobalHeader :user='userData'/>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import { GloablDataProps } from '@/mock/testData'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const store = useStore<GloablDataProps>()
    const userData = computed(() => store.state.user)

    return {
      userData
    }
  }
})
</script>
