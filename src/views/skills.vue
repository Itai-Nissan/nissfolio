<template>
    <section class="skills">
        <h1>My Skills</h1>
        <section class="skills-wrapper container">
            <div class="skills-table">
                <div v-for="skill in skills" :key="skill._id" class="skill-preview-container">
                    <skill-preview :skill="skill"></skill-preview>
                </div>
            </div>
            <div class="skills-img">
                <v-parallax src="https://res.cloudinary.com/counditai/image/upload/v1683704995/nissfolio/pexels-pixabay-258109-min_k6rxf9.jpg"></v-parallax>
            </div>
        </section>
    </section>
</template>
<script>
import skillPreview from '../components/skill.preview.cmp.vue'

export default {
    name: 'NissfolilSkills',
    components: {
        skillPreview
    },
    data() {
        return {
            navClass: 'skills-nav',
            skills: null,
        }
    },
    created() {
        this.skills = this.$store.getters.skills
        this.onSetNavClass(this.navClass)
    },
    mounted() {
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    },
}
</script>