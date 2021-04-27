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
  created() {
    console.log(this.$store.state)
  }
}
</script>

<style>

</style>
