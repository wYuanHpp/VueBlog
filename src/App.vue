<template>
  <div id="app">
    <sidebar></sidebar>
    <!-- <transition  name="fade" mode='out-in'> -->
    <transition name="fade" mode='out-in'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
     
  </div>
</template>

<script>
import sidebar from "./components/SideBar.vue"

export default {
  name: 'app',
  components:{sidebar,},
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
#app {
  height:100%;
  width: 100%;
  background: url("./assets/backgroundImag/wallhaven-460903.jpg");
  background-size:cover;
  background-position: center center;
  overflow: hidden;
}
  
</style>
