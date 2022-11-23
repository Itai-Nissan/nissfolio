<template>
    <section v-if="this.currentWork" class="work-details container">
        <div class="work-details-header">
            <h3>{{ firstToCap(this.currentWork.category) }}</h3>
            <h2>{{ firstToCap(this.currentWork.title) }}</h2>
        </div>
        <div class="work-details-tech">
            <div class="specs">
                <div class="header">
                    <h3>Tech specs</h3>
                </div>
                <div class="tech-specs">
                    {
                    <p>Frontend: {{ firstToCap(currentWork.tech.frontend) }}</p>
                    <p v-if="currentWork.tech.backend">Backend: {{ firstToCap(currentWork.tech.backend) }}</p>
                    <p v-if="currentWork.tech.data">Data: {{ firstToCap(currentWork.tech.data) }}</p>}
                </div>
            </div>
            <div class="specs-url">
                <div class="header">
                    <h3>Visit site</h3>
                </div>
                <div class="url">
                    {
                    <br>
                    <a :href="currentWork.url" target="_blank">URL: {{ currentWork.url }}</a>
                    <br>
                    }
                </div>
            </div>
        </div>
        <div class="work-details-media">
            <img :src=currentWork.imgUrl alt="">
            <video v-if="currentWork.vidUrl" controls autoplay style="width:300px" :src=currentWork.vidUrl></video>
        </div>
    </section>
</template>

<script>
export default {
    name: 'work-details',
    data() {
        return {
            currentWork: null
        }
    },
    created() {
        const { id } = this.$route.params
        this.$store.dispatch({type:'getWorkById', id})
    },
    mounted() {
        this.currentWork = this.$store.getters.work
        document.body.style.backgroundImage = "url('../src/assets/images/pexels-johannes-plenio-1110663.jpg')"
    },
    methods: {
        firstToCap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ')
        }
    },
    computed: {
    }
}
</script>