<template>
  <div class="sidebar">
    <router-link to="/" class="nav-link">Dashboard</router-link>
    <router-link to="/items" class="nav-link">Items</router-link>
    <router-link to="/customers" class="nav-link">Customers</router-link>
    <router-link to="/suppliers" class="nav-link">Suppliers</router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="css">
@import "../../assets/sidebar.css";
</style>
