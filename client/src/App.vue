<script>
import SideBar from "./components/sidebar/sidebar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<template>
  <div id="app">
    <SideBar />
    <!-- Page content -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #6d28d9;
  /* --first-color: #1f795e; */
  /* --first-color-light: #AFA5D9; */
  --first-color-light: #fdfdfd;
  --white-color: #f7f6fb;
  /* --body-font: 'Nunito', sans-serif; */
  --body-font: "Montserrat", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: none;
}

a:hover {
  color: none;
}

h1 {
  font-family: var(--body-font) !important;
  font-weight: 700;
}
</style>
