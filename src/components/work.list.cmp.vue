<template>
    <section>
        <div v-if="works" class="work-list container clean-list">
            <li v-for="work in works" :key="work._id" class="">
                <work-preview :work="work"/>
            </li>
        </div>
    </section>
</template>

<script>
import WorkPreview from './work.preview.cmp.vue';
export default {
    name: 'WorkList',
    components: {
        WorkPreview,
    },
    props: {
        works:{
            type: Array,
            required: true
        }
    },
}
</script>