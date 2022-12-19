<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-kyle-roxas-2138922-min.jpg" alt="">
    </div>
    <section class="contact container">
        <h1>Contact</h1>
        <section class="contact-info">
            <div class="contact-card">
                <mdicon name="email" />
                <span>itainissan@gmail.com</span>
            </div>
            <div class="contact-card">
                <mdicon name="linkedin" />
                <a href="https://www.linkedin.com/in/itai-nissan-b4624821a/" target="_blank">Linkedin</a>
            </div>
            <div class="contact-card">
                <mdicon name="github" />
                <a href="https://github.com/Itai-Nissan/" target="_blank">Github</a>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'NissfolioContact',
    data() {
        return {
            navClass: 'contact-nav',
        }
    },
    created() {
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        // document.body.style.backgroundImage = "url('../src/assets/images/pexels-kyle-roxas-2138922.jpg')"
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    }
}
</script>
