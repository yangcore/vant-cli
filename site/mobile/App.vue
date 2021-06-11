<template>
  <div>
    <demo-nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import DemoNav from './components/DemoNav';

export default {
  components: { DemoNav },
  mounted(){
    this.$nextTick(()=>{
      const vanCustomCss = document.createElement('link');
      vanCustomCss.href = '/site/van-custom.css'
      vanCustomCss.rel = 'stylesheet'
      const s = document.getElementsByTagName('head')[0];
      s.appendChild(vanCustomCss);
    })
  },
};
</script>

<style lang="less">
@import '../common/style/var';
@import '../common/style/base';

body {
  min-width: 100vw;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
