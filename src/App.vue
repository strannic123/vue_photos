<template>
  <layout>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:sidebar>
      Sidebar
    </template>
    <template v-slot:content>
      Content
    </template>
  </layout>
</template>

<script>
import Layout from "./components/Layout";


export default {
  name: 'App',
  components: {
    Layout,
  },

}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}

</style>
