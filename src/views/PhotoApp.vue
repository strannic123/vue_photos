<template>
  <layout>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:sidebar >
      <album
          v-for="album in albums"
          :album="album"
      >

      </album>
    </template>
    <template v-slot:content>
      <router-view/>

    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout";
import Album from "../components/Album";


export default {
  name: 'PhotoApp',
  components: {
    Layout,
    Album
  },


  async created() {
    this.$store.dispatch('albums/fetchAlbums')
  },

  methods: {
    fetchPhotosForAlbums(albumId){
      this.$store.dispatch('photos/fetchPhotosForAlbums', {id: albumId})
    }
  },

  watch: {
    $route: {
      handler(val) {
        this.fetchPhotosForAlbums(val.params.id)
      },
      immediate: true
    }
  },
  computed: {
    albums(){
      return this.$store.state.albums.all
    }
  }


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
