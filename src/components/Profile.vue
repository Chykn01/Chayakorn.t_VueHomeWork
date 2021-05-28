<template>
  <div class="container">
    <h1>Profile</h1>
    <br />
    <p>
      Name : {{ Name }} <br />
      Nick Name : {{ NickName }} <br />
      Age: {{ Age }} <br />
      Skill: {{ Skill }} <br />
      Softskill: {{ Softskill }}
    </p>
  </div>
  <br />
  <div class="container">
    <router-link :to="{ name: 'Contact' }"> Go to Contact </router-link>
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
      Name: "Chayakorn Tinkornrusmeee",
      NickName: "Warm",
      Age: "21",
      Skill: "Sql / R / C# /Java / Python",
      Softskill:
        "Time Managment , Adaptabiliity , Teamwork , Analytic , Obeservation",
    };
  },
};
</script>
<style scope>
h1 {
  margin: 40px 0 40px;
  text-align: center;
}
p {
  margin: 0 40px 0 40px;
}
</style>