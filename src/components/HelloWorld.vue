<script setup lang="ts">
import { ref } from "vue"
// import logoUrl from "../assets/logo.png"
import logoUrl from "@/assets/logo.png"
import styleCss from "./HelloWorld.module.css"
import { useMainStore } from "@/store"
import { storeToRefs } from "pinia"

const count = ref(0)
const mainStore = useMainStore()
// const storeCount = mainStore.count
const { count: storeCount } = storeToRefs(mainStore)

const add = () => {
  mainStore.$patch({
    firstName: "李",
    lastName: "四",
    count: mainStore.count + 1
  })
}

const add2 = () => {
  mainStore.$patch((state) => {
    state.firstName = "王"
    state.lastName = "五"
    state.count = state.count + 2
  })
}

defineProps<{ msg: string }>()
</script>
<template>
  <div class="logo"></div>
  <h1>{{ msg }}</h1>
  <img :src="logoUrl" />
  <img src="@/assets/logo.png" style="width: 50px" />
  <div>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
  <a>超链接</a>
  <div :class="$style.module">css module</div>
  <a :class="styleCss.link">外联样式</a>
  <h2>less</h2>
  <h3>sass</h3>
  <div class="postcss"></div>

  <div>
    <p>name: {{ mainStore.name }}</p>
    <p>count: {{ mainStore.count }}</p>
    <p>count: {{ storeCount }}</p>
    <button @click="mainStore.count++">mainStore.count++</button>
    <button @click="add()">add()</button>
    <button @click="add2()">add2()</button>
    <button @click="mainStore.addAmount(3)">mainStore.addAmount(3)</button>
  </div>
</template>

<style scoped>
a {
  color: red;
}
.logo {
  width: 50px;
  height: 50px;
  background-image: url(@/assets/logo.png);
  background-size: contain;
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
