<template >
    <div id="storebody">
        <Display :showTrends="false" />
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Display from "../components/Display.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Store",
    components: {
        Display,
        Footer,
    },
};
</script>
<style scoped>
#storebody {
    margin-top: 150px;
}
</style>
