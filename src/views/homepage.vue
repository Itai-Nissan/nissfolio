<template>
    <div class="">
        <section class="home-page">
            <!-- <template> -->
            <!-- </template> -->

            <div class="bg-image">
                <!-- <v-parallax src="../assets/images/pexels-johannes-plenio-1114891-min.jpg"></v-parallax> -->
                <!-- <transition name="fade">
                    <img v-if="visible" src="../assets/images/pexels-johannes-plenio-1114891-min.jpg" alt="">
                </transition> -->
            </div>
            <div class="text">
                <transition name="fade">
                    <h1 v-if="visible">ITAI NISSAN</h1>
                </transition>
                <transition name="fade">
                    <h3 v-if="visible">A full stack developer </h3>
                </transition>
                <div class="summary">
                    <div class="summary-img">
                        <v-parallax src="../assets/images/pexels-johannes-plenio-1114891-min.jpg"></v-parallax>
                    </div>
                    <div class="summary-info">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem animi corporis
                            laudantium dolorem
                            asperiores
                            voluptates vel quam aperiam voluptatem. Veritatis deserunt beatae laboriosam vero consequuntur
                            magni,
                            autem
                            quos iusto numquam eligendi cupiditate quod tempore quae, recusandae corrupti fugiat nemo
                            suscipit
                            unde
                            laudantium expedita! Inventore dolorum ratione eum nostrum tempora ex.
                        </p>
                    </div>
                    <!-- <div class="summary-img"> -->
                    <!-- <v-parallax src="../assets/images/pexels-johannes-plenio-1114891-min.jpg"></v-parallax> -->
                    <!-- </div> -->
                </div>
            </div>
        </section>
        <section class="work-bg">
            <work :works="works"></work>
        </section>
        <section class="skills container">
            <section class="skills-table">
                <div v-for="skill in skills" :key="skill._id" class="skill-preview-container">
                    <skill-preview :skill="skill"></skill-preview>
                </div>
            </section>
        </section>
        <contact></contact>
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