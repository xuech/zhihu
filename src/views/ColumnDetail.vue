<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GloablDataProps } from '@/mock/testData'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const route = useRoute()
    const store = useStore<GloablDataProps>()
    const { columns, posts } = store.state

    const currentId = Number(route.params.id)
    const column = columns.find(c => c.id === currentId)
    const list = posts.filter(post => post.columnId === currentId)
    return {
      column,
      list
    }
  }

})
</script>
