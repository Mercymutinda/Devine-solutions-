<script setup>
</script>

<template>
  <div class="full-bg m-0 p-0 bg-light boddy">
    <div class="card-wrapper  ">
    <div class="card-container d-flex flex-wrap justify-content-center ">
      <div class="card m-2">
        <img src="/blue7.avif" alt="Card Image">
        <div class="card-content">
          <h3>Our Services</h3>
          <p>We offer a wide range of services to meet your needs...</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>

      <div class="card m-2">
        <img src="/blue8.jpeg" alt="Card Image">
        <div class="card-content">
          <h3>Our Services</h3>
          <p>We offer a wide range of services to meet your needs...</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
      <div class="card m-2">
        <img src="/blue.jpeg" alt="Card Image">
        <div class="card-content">
          <h3>Our Services</h3>
          <p>We offer a wide range of services to meet your needs...</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>

      <div class="card m-2">
        <img src="/blue1.jpeg" alt="Card Image">
        <div class="card-content">
          <h3>Our Services</h3>
          <p>We offer a wide range of services to meet your needs...</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
  </div>  
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.boddy {
  background-color: #f0f0f0;
}
.card-container {
  margin-top: 200px;
}
.card-wrapper {
  background-color: #e0e0e0; /* Light gray */
  border-radius: 12px;
  margin-top: 50px;
margin-left: 50px;
padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}
.card {
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  height: auto;
}
.card img {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 16px;
}
.card-content h3 {
  margin-bottom: 8px;
  font-size: 24px;
}
.card-content p {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.3;
}
.full-bg {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
