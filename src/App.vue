<template>
  <div id="app">
    <sidebar></sidebar>
    <!-- <transition  name="fade" mode='out-in'> -->
    <transition name="fade" mode='out-in'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <modal></modal>
  </div>
</template>

<script>
import sidebar from "./components/SideBar.vue"
import modal from "./components/modal.vue"
export default {
  name: 'app',
  components:{sidebar,modal},
  data () {
    return {

    }
  }
}
</script>

<style lang='scss'>
html,body {
  width:100%;
  height:100%;
}
#app {
  height:100%;
  width: 100%;
  background: url("./assets/backgroundImag/wallhaven-460903.jpg");
  background-size:cover;
  background-position: center center;
  overflow: hidden;
}
  
</style>
