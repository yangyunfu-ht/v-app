<template>
  <el-container>
    <el-aside width="10%">Aside</el-aside>
    <el-container>
      <el-header height="8%">Header</el-header>
      <el-main>
       main
      </el-main>
      <el-footer v-if="player">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    return {
      user: computed(() => store.state.user),
      player: computed(() => store.state.player)
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