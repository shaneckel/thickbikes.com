<template>
  <footer>
    <ul>
      <li><a href="https://www.facebook.com/thickbikes/">facebook</a></li>
      <li><a href="https://twitter.com/thickbikes">twitter</a></li>
      <li><a href="https://www.instagram.com/thickbikes/">instagram</a></li>
    </ul>
    <p>As a quick reminder. We have <a href="https://www.youtube.com/watch?v=cd4-UnU8lWY&feature=youtu.be&t=35">free parking</a>.</p>
  </footer>
</template>

<style scoped>
p
{
  padding: .5em 0;
  color: black;
}
ul
{
  list-style-type: none;
}
li{
  display: inline-block;
  margin-right: .5em;
  background: black;
  padding: .2em .6em;
}
p a{
  color: #999;
  text-decoration: underline;
}

@media all and (max-width: 799px){
  footer p{
    text-align: center;
    font-size: .9em;
    padding: 1.6em 0 1em;
  }
}

</style>
