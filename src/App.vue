<template>
  <LikeButton />
  <div id="app"></div>
  <NavBar />
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import LikeButton from './components/LikeButton.vue'

  export default {
    name: 'app',
    components: {
      NavBar,
      LikeButton
    },
    methods: {
      likeRatingClick: function () {
        console.log('Thanks for the like')
      }
    }
  }
</script>
