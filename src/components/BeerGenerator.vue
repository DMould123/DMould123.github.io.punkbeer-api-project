<template>
  <div id="Beer Generator"></div>
  <h1 v-if="title">Random Beer Generator</h1>
  <br />
  <ol>
    <li :key="beer.id" v-for="beer in beers">
      <label>NAME: </label> {{ beer.name }}
    </li>
    <br />
    <li :key="beer.id" v-for="beer in beers">
      <label>DESCRIPTION:</label> {{ beer.description }}
    </li>
    <br />
    <li :key="beer.id" v-for="beer in beers">
      <label>ABV:</label> {{ beer.abv }}%
    </li>
    <br />
    <li :key="beer.id" v-for="beer in beers">
      <label>BEST FOODS TO DRINK WITH IT:</label> {{ beer.food_pairing }}
    </li>
  </ol>
  <div class="button-container">
    <button @click="fetchBeers">
      <strong>CAN'T MAKE UP YOUR MIND</strong><br /><i
        >Click here and we can choose for you</i
      >
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Beer Generator',
    components: {},

    created() {
      this.fetchBeers()
    },
    data() {
      return { beers: null, title: true }
    },
    methods: {
      fetchBeers() {
        fetch('https://api.punkapi.com/v2/beers/random')
          .then((response) => response.json())
          .then((result) => {
            this.beers = result
            console.log(result)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
  }
  .button-container {
    display: flex;
    justify-content: center;
    padding: 0px 32px;
    margin: 64px auto;
    color: gold;
  }
  button {
    border: none;
    outline: none;
    background-color: gold;
    padding: 16px 32px;
    border-radius: 99px;
    color: black;
    font-size: 1.25em;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.4s;
  }

  h1 {
    padding-top: 10px;
    font-weight: bold;
    font-size: 2em;
    color: gold;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: gold;
  }

  .input-container {
    justify-content: center;
    color: gold;
    position: relative;
    text-align: center;
    width: 90%;
  }

  .title {
    font-size: 2.53em;
    padding: 20px;
  }

  label {
    color: gold;
  }
</style>
