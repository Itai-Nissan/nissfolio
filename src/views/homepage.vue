<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-johannes-plenio-1114891-min.jpg" alt="">
    </div>
    <section class="home-page container">
        <div class="text">
            <transition name="fade">
                <h1 v-if="visible">ITAI NISSAN</h1>
            </transition>
            <transition name="fade">
                <h3 v-if="visible">FRONTEND // FULL STACK DEVELEPOR </h3>
            </transition>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'HomePage',
    setup() {
        const visible = ref(false)
        return { visible }
    },
    data() {
        return {
            navClass: 'home-nav',
        }
    },
    created() {
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        this.visible = true
        // document.body.style.backgroundImage = "url('../src/assets/images/pexels-johannes-plenio-1114891.jpg')"
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        },
    },
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s ease;
}
</style>