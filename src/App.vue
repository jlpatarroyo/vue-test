<template>
  <div id="app">
    <el-menu mode="horizontal" @select="handleSelect" id="nav">
      <el-menu-item index="1">Rick & Morty Characters</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class App extends Vue{
  
  handleSelect(key: any, keyPath: any){
    if(key == 1){
      this.$router.push("/characters");
    }
  }

  mounted(){
    this.$router.push("/characters");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
