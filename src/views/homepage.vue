<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-johannes-plenio-1114891.jpg" alt="">
    </div>
    <section class="home-page container">
        <div class="text">
            <h1>ITAI NISSAN</h1>
            <h3>FRONTEND // FULL STACK DEVELEPOR </h3>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            navClass: 'home-nav',
        }
    },
    created() {
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        // document.body.style.backgroundImage = "url('../src/assets/images/pexels-johannes-plenio-1114891.jpg')"
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        },
    },
}
</script>

<style>

</style>
