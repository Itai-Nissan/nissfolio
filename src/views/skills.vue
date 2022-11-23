<template>
    <div class="skills container">
        <h1>My Skills</h1>
        <section class="skills-table">
            <div v-for="skill in skills">
                <section @click="openModal()" :class="{ 'open-modal': isOpen, 'close-modal': !isOpen }"
                    class="skills-card">
                    <div class="card-header">
                        <h5>{{ skill.title }}</h5>
                    </div>
                    <div class="card-footer">
                        <p>{{ skill.desc }}</p>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data() {
        return {
            isOpen: false,
            skills: [
                {
                    title: 'Fronend // Fullstack',
                    desc: 'Experience with both nextjs & nuxtjus'
                },
                {
                    title: 'Fronend // Fullstack',
                    desc: 'Experience with both nextjs & nuxtjus'
                },
                {
                    title: 'Fronend // Fullstack',
                    desc: 'Experience with both nextjs & nuxtjus'
                },
            ]
        }
    },
    mounted() {
        document.body.style.backgroundImage = "url('../src/assets/images/pexels-pixabay-258109.jpg')"
    },
    methods: {
        openModal() {
            this.isOpen = !this.isOpen
            console.log(this.isOpen);
        },
    }
}
</script>

<style>

</style>