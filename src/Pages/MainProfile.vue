<template>
  <h1>Portfolio</h1>
  <div class="container">
    <div>
      <router-link :to="{ name: 'Profile' }">Profile</router-link>
    </div>
    <br />
    <div>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </div>
</template>

<style>
h1 {
  margin: 40px 0 40px;
  text-align: center;
}
</style>