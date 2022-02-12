<template >
    <div id="storebody">
        <Test />
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Test from "../components/Test.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Store",
    components: {
        Test,
        Footer,
    },
};
</script>
<style scoped>
#storebody {
    margin-top: 150px;
}
</style>
