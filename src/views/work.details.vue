<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-johannes-plenio-1110663.jpg" alt="">
    </div>
    <section v-if="currentWork" class="work-details container">
        <div class="work-details-header">
            <h3>{{ firstToCap(currentWork.category) }}</h3>
            <h1>{{ firstToCap(currentWork.title) }}</h1>
        </div>
        <div class="work-details-tech">
            <div class="specs card">
                <div class="header">
                    <h4>Tech specs</h4>
                </div>
                <div class="tech-specs">
                    <p>Frontend: {{ firstToCap(currentWork.tech.frontend) }}</p>
                    <p v-if="currentWork.tech.backend">Backend: {{ firstToCap(currentWork.tech.backend) }}</p>
                    <p v-if="currentWork.tech.data">Data: {{ firstToCap(currentWork.tech.data) }}</p>
                </div>
            </div>
            <div class="specs-url card">
                <div class="header">
                    <h4>Visit site</h4>
                </div>
                <div class="url">
                    <a :href="currentWork.url" target="_blank">URL: {{ currentWork.url }}</a>
                </div>
            </div>
        </div>
        <div class="work-details-media">
            <section class="details-carousel">
                <v-carousel show-arrowsshow-arrows-on-hover hide-delimiter-background height="auto">
                    <v-carousel-item v-for="(img, i) in currentWork.images" :key="i" :src="img"
                    reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>
                <video v-if="currentWork.vidUrl" controls autoplay :src=currentWork.vidUrl></video>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WorkDetails',
    data() {
        return {
            navClass: 'details-nav',
            currentWork: null
        }
    },
    computed: {
    },
    created() {
        const { id } = this.$route.params
        this.$store.dispatch({ type: 'getWorkById', id })
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        this.currentWork = this.$store.getters.work
    },
    methods: {
        firstToCap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ')
        },
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    }
}
</script>