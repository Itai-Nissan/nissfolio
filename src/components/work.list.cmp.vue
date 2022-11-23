<template>
    <section>
        <div v-if="works" class="work-list clean-list">
            <li v-for="work in works" class="" :key="work._id">
                <work-preview :work="work" />
            </li>
        </div>
    </section>
</template>

<script>
import WorkPreview from './work.preview.vue';
import workPreview from './work.preview.vue'
export default {
    name: 'works',
    props: {
        works: Array
    },
    components: {
        workPreview,
    },
}
</script>