<template>
  <el-container>
    <el-aside width="10%">
      <!-- ---{{ menuRouter }} -->
      aside
    </el-aside>
    <el-container>
      <el-header height="8%" v-if="header">
        <slot name="header"></slot>
      </el-header>
      <el-main>
        <router-view></router-view>
        <el-button type="primary" @click="tapSearch">primary</el-button>
        <el-drawer
          title="我是标题"
          v-model="search"
          size="50%"
          :close-on-click-modal="false"
          :with-header="false">
          <el-button type="primary" @click="tapClose">close</el-button>
        </el-drawer>
      </el-main>
      <el-footer v-if="player">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, toRefs, reactive } from 'vue'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const menuRouter = reactive({})

    const tapSearch = () => {
      store.commit('user_search', true)
    }

    const tapClose = () => {
      store.commit('user_search', false)
    }
    
    onMounted(() => {
      console.log(router.options.routes)
      menuRouter.value = router.options.routes
      const { path } = toRefs(route)
      console.log(path.value)
    })

    return {
      search: computed(() => store.state.search),
      user: computed(() => store.state.user),
      player: computed(() => store.state.player),
      header: computed(() => store.state.header),
      tapSearch,
      tapClose,
      menuRouter
    }
  },
}
</script>

<style  scoped>
  .el-container:first-child {
    height: 100%;
    width: 100%;
    background-color:#fff;
  }

  .el-aside {
    height: 100%;
    min-width: 100px;
    background-color: rgba(245,245,245,.3);
  }

  .el-header {
    box-sizing: border-box;
    border-bottom: 1px solid #F2F6FC;
    min-height: 60px;
  }
</style>