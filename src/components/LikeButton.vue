<template>
  <button @click="ratingClick">GIVE US A THUMBS UP{{ rating }}</button>
</template>

<script>
  export default {
    props: {
      rating: {
        required: true,
        type: String
      },
      ratingClick: {
        required: true,
        type: Function
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    border: none;
    outline: none;
    background-color: gold;
    color: black;
    font-size: 0.5em;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
