<template>
  <div class="homepage">
    <h1>Home ☀️</h1>
    <ol>
      <li @click="this.$router.push('principles')">Principles</li>

      <li @click="this.$router.push('cognitive-structures')">Cognitive Structures
        <ol type="a">
          <li>Mental Models</li>
          <li>Schemas</li>
        </ol>
      </li>
      <li @click="this.$router.push('mindsets')">Mindsets</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  },
  methods: {
    goToPrinciples() {
      this.$router.push({
        name: "Principles"
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  font-size: 22px;
  padding-bottom: 10px;
}

li li {
  padding-top: 3px;
  padding-bottom: 0px;
  ;
}
</style>
