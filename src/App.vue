<template>
  <layout>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:sidebar >
      <div v-for="album in albums">
        {{album.title}}
      </div>
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
  data() {
    return {
      albums: []
    }
  },

  async created() {

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
