<template>
    <section class="preview-container">
        <v-btn width="150px" class="ma-2" @click="expand = !expand">
            <v-card-title>{{ workTitle }}</v-card-title>
        </v-btn>
        <v-expand-x-transition>
            <section v-show="expand" class="secondary work-preview">
                <Router-link :to="`/work-details/${work._id}`">
                    <div class="work-card" outlined>
                        <img class="" :src=work.imgUrl>
                        <div class="card-info">
                            <v-card-title>{{ workTitle }}</v-card-title>
                            <div class="info-text-card">
                                <v-card-text class="info-before">{{ work.category }}</v-card-text>
                                <v-card-text class="info-after">Show project</v-card-text>
                            </div>
                        </div>
                    </div>
                </Router-link>
            </section>
        </v-expand-x-transition>
    </section>
</template>

<script>
export default {
    name: 'work-preview',
    props: {
        work: Object
    },
    data: () => ({
        expand: false,
    }),
    methods: {
    },
    computed: {
        workTitle() {
            const str = this.work.title
            return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ')
        }
    }
}
</script>