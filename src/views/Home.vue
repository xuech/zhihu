<template>
  <div>
     <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>
