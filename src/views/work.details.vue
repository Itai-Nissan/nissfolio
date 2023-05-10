<template>
    <div class="work-details-bg">
        <section v-if="currentWork" class="work-details container">
            <div class="work-details-header">
                <div class="page-headline">
                    <h3>{{ firstToCap(currentWork.category) }}</h3>
                    <RouterLink to="/">
                        <h5>Back</h5>
                    </RouterLink>
                </div>
                <h1>{{ firstToCap(currentWork.title) }}</h1>
            </div>
            <div class="work-details-wrapper">

                <div class="work-details-tech">
                    <div class="specs card">
                        <div class="header">
                            <h4>Tech specs</h4>
                        </div>
                        <div class="tech-specs">
                            <p>Frontend: <span>{{ firstToCap(currentWork.tech.frontend) }}</span></p>
                            <p v-if="currentWork.tech.backend">Backend:<span>{{ firstToCap(currentWork.tech.backend)
                            }}</span>
                            </p>
                            <p v-if="currentWork.tech.data">Data:<span>{{ firstToCap(currentWork.tech.data) }}</span></p>
                        </div>
                    </div>
                    <div class="specs-url card">
                        <div class="header">
                            <h4>Go to</h4>
                        </div>
                        <div class="url">
                            <a :href="currentWork.url" target="_blank">Site</a>
                            <a :href="currentWork.git" target="_blank">Git</a>
                        </div>
                    </div>
                </div>
                <div class="work-details-img">
                    <v-parallax
                        src="https://res.cloudinary.com/counditai/image/upload/v1683704937/nissfolio/pexels-johannes-plenio-1110663-min_grlb3q.jpg"></v-parallax>
                </div>
            </div>
            <div class="work-details-media">
                <section class="details-carousel">
                    <video v-if="currentWork.vidUrl" controls autoplay :src=currentWork.vidUrl></video>
                    <v-carousel show-arrowsshow-arrows-on-hover hide-delimiter-background height="auto">

                        <v-carousel-item v-for="(img, i) in currentWork.images" :key="i"
                            reverse-transition="fade-transition" transition="fade-transition">
                            <a :href=img target="_blank"><v-img class="carousel-img" :src="img" alt=""></v-img></a>
                            <v-img class="loader" v-if="img"
                                src="https://res.cloudinary.com/counditai/image/upload/v1683703507/nissfolio/ajax-loading-icon-18_mfegpc.gif"
                                alt=""></v-img>
                        </v-carousel-item>
                    </v-carousel>
                </section>
            </div>
        </section>
    </div>
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
        window.scrollTo(0, 0);

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