<template>
    <div class="">
        <section class="home-page">
            <div class="text">
                <transition name="fade">
                    <h1 v-if="visible">ITAI NISSAN</h1>
                </transition>
                <transition name="fade">
                    <h3 v-if="visible">Full stack developer </h3>
                </transition>
                <div class="summary container">
                    <div class="summary-img">
                        <v-parallax
                            src="https://res.cloudinary.com/counditai/image/upload/v1683703272/nissfolio/pexels-johannes-plenio-1114891-min_we8ogo.jpg"></v-parallax>
                    </div>
                    <div class="summary-info container">
                        <p>
                            Experienced full-stack developer proficient in modern JavaScript, HTML, and CSS. Skilled in
                            utilizing front-end frameworks such as Vue, React and Angular, as well as back-end frameworks like
                            Node.js and ExpressJs. Proficient in working with libraries such as Vuetify and Material UI,
                            delivering visually appealing and responsive web applications. Strong expertise in database
                            management and RESTful API integration. A versatile developer ready to bring innovative
                            solutions to complex projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
            <section class="work-bg">
                <work :works="works"></work>
            </section>
        </v-lazy>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
            <section class="skills-bg">
                <skills :skills="skills"></skills>
            </section>
        </v-lazy>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
            <section class="contact-bg">
                <contact></contact>
            </section>
        </v-lazy>
    </div>
</template>

<script>
import { ref } from 'vue'
import skills from './skills.vue'
import work from './work.vue'
import workList from '../components/work.list.cmp.vue'
import skillPreview from '../components/skill.preview.cmp.vue'
import contact from './contact.vue'

export default {
    name: 'HomePage',
    components: {
        skills,
        work,
        workList,
        skillPreview,
        contact,
    },
    setup() {
        const visible = ref(false)
        return { visible }
    },
    data() {
        return {
            works: null,
            skills: null,
            navClass: 'home-nav',
        }
    },
    created() {
        this.works = this.$store.getters.works
        this.skills = this.$store.getters.skills
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        this.visible = true
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        },
    },
}
</script>