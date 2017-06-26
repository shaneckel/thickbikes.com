{{{{raw}}}}
<template>
  <section class="container">
    <h1>I'm not sure what happened. Probably Bees. It seems like it's <em>always</em> bees...</h1>
    <p>Try the <a href="/">homepage</a> instead.</p>
    <p>With love,<br><em>Some nerd... Somewhere...</em></p>
  </section>
</template>
{{{{/raw}}}}

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container{
  color: white;
  background: #333;
  margin: 0 auto;
  padding: 3rem 2rem;
}
h1{
  padding: 2rem;
  font-size: 2.8em;
  line-height: 1.4em;
}
p
{
  padding: 2rem;
  font-size: 1.8em;
}
</style>
