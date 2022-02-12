<template class="bg-dark" style="width=100%">
    <div class="container-fluid ">
        <div class="row ">
            <div class="col-12 ">
                <div class="">
                    <Mainpage />
                    <Affichage />
                    <Apropos />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Mainpage from "@/components/Mainpage.vue";
import Footer from "../components/Footer.vue";
import Affichage from "../components/Affichage.vue";
import Apropos from "../components/Apropos.vue";

export default {
    name: "Home",
    components: {
        Mainpage,
        Footer,
        Apropos,
        Affichage,
    },
};
</script>
