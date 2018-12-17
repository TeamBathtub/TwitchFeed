<template>
  <section>
    <nav v-if="user">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/streamers">Search</RouterLink>
      <RouterLink to="/ratings">Ratings</RouterLink>
      <RouterLink to="/about">About Us</RouterLink>
      <a href="#" @click="handleLogout">Logout</a>
    </nav>
    <h1>About Us</h1>
  </section>
</template>

<script>
export default {

};
</script>

<style>

</style>
