<template>
  <div id="app">
     <div class="test"></div>
    <p>阅读</p>
  </div>
</template>

<style lang="scss">
    @import "assets/css/mixin";
    @import "assets/css/variable";
 .test{
     width: 500px;
     height: 500px;
     background: plum;
     transform: translate(100px,100px);
}
p{
    @include font_size($font_large);
}
</style>
