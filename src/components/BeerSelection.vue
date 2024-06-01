<template>
  <div class="beer-grid">
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270047/2_rcwj8h.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717269990/16_bxhlgk.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270112/12_whllol.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270165/5_exc4mm.png"
      width="500"
      height="700"
    />

    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270292/19_ijjcsa.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270344/6_pxruub.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270423/10_qbequm.png"
      width="500"
      height="700"
    />
    <img
      class="beer-images"
      src="https://res.cloudinary.com/dele4dvi9/image/upload/v1717270471/14_zh1rqx.png"
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
