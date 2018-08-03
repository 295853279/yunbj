<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  body {
    background: #f1f1f1;
  }
</style>
