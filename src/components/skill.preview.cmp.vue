<template>
    <section :class="{ 'open-modal': isOpen, 'close-modal': !isOpen }" class="skill-card" @click="openModal()">
        <div class="card-header">
            <h5>{{ skill.title }}</h5>
            <section class="card-icons">
                <ul v-for="icon in skill.icons">
                    <mdicon :name="icon" />
                </ul>
            </section>
        </div>
        <div v-if="isOpen" class="card-footer">
            <p>{{ skill.desc }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkillsCmp',
    props: {
        skill: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        openModal() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>