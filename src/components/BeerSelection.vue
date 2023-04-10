<template>
  <div class="beer-grid">
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/2.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/16.png "
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/12.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/5.png"
      width="500"
      height="700"
    />

    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/19.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/6.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/10.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://images.punkapi.com/v2/14.png"
      width="500"
      height="700"
    />
  </div>
</template>

<script>
  export default {
    name: 'BeerSelection'
  }
</script>

<style lang="scss" scoped>
  .beer-grid {
    display: flex;
    flex-wrap: row;
    width: 90%;
    margin: 0 auto;
  }
  .beer-images {
    display: block;
    flex-basis: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
