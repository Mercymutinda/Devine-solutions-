<template>
<section class="about-us">
  <div class="about">
    <img src="/public/phone2.avif" class="pic" />
    <div class="text">
      <h2>About Us</h2>
      <h5> Devine solutions and <span> Technologies</span>  </h5>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eveniet distinctio incidunt consequatur veniam sint eos quae quaerat eius amet in alias illum quisquam enim ex excepturi! Omnis, ipsam repellat!</p>
      <div class="data"> 
      <a href="#" class="hire">Hire Me</a>

      </div>


    </div>
  </div>

</section>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif; 
}
.about-us{
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 90px 0;
  background: hsla(201, 78%, 66%, 0.3); /* Lighter & transparent */
  ;
}
.pic{
  height: auto;
  width: 400px;
  border-radius: 12px;
}
.about{
  width:1130px;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.text{
  width:540px;
}
.text h2{
  color: #333;
  font-size: 90px;
  font-weight: 600;
  margin-bottom: 10px;
}
.text h5{
  color:#333;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
}
span{
  color: #4070f4;
}
.text p{
  color:#333;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1px;
}
.data{
  margin-top: 30px;
}
.hire{
  font-size: 18px;
  color: #333;
  background: #4070f4;
  text-decoration: none;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  transition: 0.5s;
}
.hire:hover{
  background: #000;
}
</style>
