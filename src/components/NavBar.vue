<template>
  <LikeButton />
  <h1>BEERS FOR THE PEOPLE</h1>
  <div id="nav">
    <nav>
      <div id="image-logo"></div>
      <img src="/assets/goldlogo.png" alt="logo" width="30" height="30" />
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        <RouterLink to="/BeerGenerator">Random Beer Generator</RouterLink>
      </li>
      <li><RouterLink to="/CompanyProfile">Company Profile</RouterLink></li>
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss" scoped>
  nav {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    display: flex;
    transition: 0.3s;
    padding: 10px 15px;
    position: relative;
    text-align: center;
    border-bottom: 2px solid transparent;
  }

  li:hover {
    background-color: gold;
    border-bottom-color: yellowgreen;
  }

  .image-logo {
    justify-content: center;
    align-content: flex-end;
  }

  h1 {
    color: gold;
    text-align: center;
    font-size: medium;
  }
</style>
