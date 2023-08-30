<script setup lang="ts">
import { ref } from "vue"
import logoUrl from "../assets/logo.png"
import styleCss from "./HelloWorld.module.css"
const count = ref(0)

defineProps<{ msg: string }>()
</script>
<template>
  <h1>{{ msg }}</h1>
  <img :src="logoUrl" />
  <div>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
  <a>超链接</a>
  <div :class="$style.module">css module</div>
  <a :class="styleCss.link">外联样式</a>
  <h2>less</h2>
  <h3>sass</h3>
  <div class="postcss"></div>
</template>

<style scoped>
a {
  color: red;
}
</style>

<style module>
.module {
  color: red;
}
</style>
<style scoped lang="less">
// @color: red;
h2 {
  color: @color;
}
</style>
<style scoped lang="scss">
// $color: red;
h3 {
  color: $color;
}
</style>
<style scoped>
.postcss {
  height: 30px;
  width: 60px;
  background-color: orange;
  transform: rotate(25deg);
}
</style>
