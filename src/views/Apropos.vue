<template>
  <div class="about">
   <Apropos/>
   <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src

import Apropos from "../components/Apropos.vue";
import Footer from '../components/Footer.vue'
export default {
    name: "apropos",
    components: {
       Apropos,
       Footer
    },
};
</script>
<style scoped>
.about{
  margin-top:150px;
}
</style>