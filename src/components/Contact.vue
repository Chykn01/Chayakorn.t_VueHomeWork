<template>
  <div>
    <h1>Contact</h1>
    <p>
      <br />
      Email : {{ Email }}
      <br />
      Phone : {{ Phone }}
    </p>
  </div>
  <br />
  <div class="container">
    <router-link :to="{ name: 'Profile' }"> Go to Profile </router-link>
  </div>
  <br />
  <div class="container">
    <router-link :to="{ name: 'Main' }"> Go to Main </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: "tn.chayakorn_st@tni.ac.th",
      Phone: "085-913-3620",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 40px;
  text-align: center;
}
p {
  margin: 0 40px 0 40px;
}
</style>