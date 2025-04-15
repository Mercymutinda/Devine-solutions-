<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <!-- NavBar -->
    <nav class="navBar  d-flex align-items-center justify-content-between px-4 py-2 w-100">
      
      <!-- Logo & Business Name -->
      <div class="d-flex align-items-center">
        <img src="/public/wifi.avif" alt="Logo" style="height: 40px; width: auto; margin-right: 10px;" />
        <h5 class="text-white m-0">Devine Solutions</h5>
      </div>

      <!-- Nav Links -->
      <ul class="nav m-0">
        <li class="nav-item">
          <RouterLink class="nav-link text-white " to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/services">Services</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white " to="/contacts">Contact</RouterLink>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
.navBar {
  top: 0;
  width: 100%;
  z-index: 3;
  background-color: #061323;
}

.nav-link {
  color: white !important;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .navBar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    margin-right: 10px;
  }
}
</style>
