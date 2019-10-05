<template>
  <div id='application'>
    <div id='nav'>
      <router-link to='/map'>Map</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #application {
    font-family: "Charcoal", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(184, 196, 221);
    background-image: url(~@/assets/bgSatellite.png);
    min-height: 100vh;
    margin: 0px;
  }

  #nav {
    padding: 9px 0px;

    a {
      width: 60px;
      padding: 8px 16px;

      color: #33567f;

      font-weight: bold;
      font-style: normal;
      text-decoration: none;

      &.router-link-exact-active {
        color: #fff;
      }
    }

    a:hover {
      background-color: #555;
      color: white;
      border-bottom: #fff solid 1px;
    }
  }
</style>
