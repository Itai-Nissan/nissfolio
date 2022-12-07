<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-pixabay-258109.jpg" alt="">
    </div>
    <section class="skills container">
        <h1>My Skills</h1>
        <section class="skills-table">
            <div v-for="skill in skills" :key="skill._id" class="skiil-preview-container">
                <skill-preview :skill="skill"></skill-preview>
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
        this.onGetSkills()
        this.onSetNavClass(this.navClass)
    },
    mounted() {
        // document.body.style.backgroundImage = "url('../src/assets/images/pexels-pixabay-258109.jpg')"
    },
    methods: {
        onGetSkills() {
            this.$store.dispatch('getSkills')
            this.skills = this.$store.getters.skills
        },
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    },
}
</script>