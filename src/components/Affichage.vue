<template>
    <div class="container-fluid">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Tendances du moment</h2>
            <h3 class="section-subheading text-muted">
                Un apercu des produit disponibles :
            </h3>
        </div>

        <div class="row justify-content-center">
            <div
                class="col-12 col-lg-6 col-xl-3 "
                v-for="elements in sneakers.slice(2, 5)"
                :key="elements.id"
            >
                <div class="container">
            <div class="card">
              <div class="image">
                <img
                  v-bind:src="elements.grid_picture_url"
                  v-bind:alt="elements.id"
                />
              </div>
              <div class="content">
                <h2>{{ elements.name }}</h2>
                <p style="color: white; font-size: 2rem">
                  {{ elements.retail_price_cents / 100 }}$
                </p>
                
              </div>
            </div>
          </div>
                
            </div>
        </div>
    </div>
</template>
<script>
// /* eslint-disable no-use-before-define */
import sneakers from "../data/API.json";

export default {
    data() {
        return sneakers;
    },
    methods: {
        onChange: function () {
            let value = this.monChoix.toString(); //On y accède de n'importe où dans le framework
            console.log("value");
            return value;
        },
        say: function (message) {
            alert(
                "Un de nos articles best-seller : '" +
                    message +
                    "' est ajouté au panier."
            );
        },
    },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #413f42;
}

.container {
  position: relative;
}

.container .card {
  position: relative;
  height: 450px;
  width: 320px;
  background: #232323;
  border-radius: 8%;
  overflow: hidden;
}

.container .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee3cb;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container .card:hover::before {
  clip-path: circle(300px at 80% -20%);
}

.container .card::after {
  content: "Sneakers Addict";
  position: absolute;
  top: 30%;
  font-size: 5em;
  font-weight: 200;
  font-style: italic;
  color: rgb(255 255 255 / 22%);
}

.container .card .image {
  position: absolute;
  top: 50%;
  left: -13px;
  transform: translateY(-50%) rotateY(180deg);
  z-index: 10000;
  width: 100%;
  height: 200px;
  transition: 0.5s;
}

.container .card:hover .image {
  top: 0%;
  transform: translateY(0%) rotateY(180deg);
}

.container .card .image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(25deg);
  width: 270px;
}

.container .card .content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container .card:hover .content {
  height: 250px;
}

.container .card .content h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  font-size: 1rem;
}

.container .card .content .size,
.container .card .content .color {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
}

.container .card:hover .content .size {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}
.container .card:hover .content .color {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container .card .content .size h3,
.container .card .content .color h3 {
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card .content .size span {
  height: 2em;
  width: 100%;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  border-radius: 4px;
  cursor: pointer;
}

.container .card .content .size span:hover {
  background-color: #eee3cb;
}

.container .card .content .color span {
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.container .card .content .color span:nth-child(2) {
  background: #eee3cb;
}

.container .card .content .color span:nth-child(3) {
  background: #d63c49;
}

.container .card .content .color span:nth-child(4) {
  background: #366ae8;
}

.container .card .content a {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
}

.container .card:hover .content a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
  background: #eee3cb;
}
</style>
