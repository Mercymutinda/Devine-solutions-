<script setup>
// No need for script here unless you're adding logic
</script>

<template>
  <div class="full-bg">
    <!-- Content goes here -->
     <div>

    <div class="centered text-white fs-4 animated-text ">
        <h1 class="text-center">Welcome to Devine Solutions</h1>
        <p class="text-center">Your one-stop solution for all your tech needs.</p>
        <p class="text-center">Explore our services and get in touch with us today!</p>
        <p>Lorem ipsum dolor sit Modi blanditiis velit accusantium quas possimus fuga nam hfh ururu ours yours anf lamenia hospyt friomn diop hty dignissimos?</p>
    </div>
</div>
  </div>
</template>

<style scoped>
.full-bg {
  width: 100vw;
  height: 100vh;
  background-image: url('/blue7.avif'); /* Background image */
  background-size: cover;  /* Ensure it covers the whole screen */
  background-position: center;  /* Keep it centered */
  background-repeat: no-repeat;  /* Prevent repeating */
  overflow: hidden; /* Prevent scrolling */
  overflow-x: hidden;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; /* Disable horizontal scroll */
  
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}



/* Fade-in animation for text */
.animated-text  {
  color: white;
  font-size: 3rem;
  text-align: center;
  opacity: 0;
  animation: fadeIn 3s forwards; /* Animation: fadeIn, duration: 3s, fill mode: forwards */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
