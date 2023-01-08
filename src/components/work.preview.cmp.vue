<template>
    <section class="preview-container">
        <div class="work-title">
            <v-btn
v-wave="{
                color: 'currentColor',
                easing: 'ease-out',
                duration: .6,
                initialOpacity: 0.2,
                finalOpacity: 0.02,
                cancellationPeriod: 75,
                trigger: 'auto',
            }" width="150px" class="ma-2" @click="expand = !expand">
                <div class="title-he">
                    <h3>{{ workTitle }}</h3>
                </div>
                <div class="title-img">
                    <img :src="work.mainImg" alt="">
                </div>
            </v-btn>
        </div>
        <v-expand-x-transition permanent expand-on-hover>
            <section v-show="expand" class="secondary work-preview">
                <Router-link :to="`/work-details/${work._id}`">
                    <div class="work-card" outlined>
                        <img class="" :src=work.mainImg>
                        <div class="card-info">
                            <v-card-title>{{ workTitle }}</v-card-title>
                            <div class="info-text-card">
                                <p class="info-before">{{ workCategory }}</p>
                                <p class="info-after">Show project</p>
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
    name: 'WorkPreview',
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        expand: false,
    }),
    computed: {
        workTitle() {
            const str = this.work.title
            return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ')
        },
        workCategory() {
            const str = this.work.category
            return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ')
        }
    },
    methods: {
    },
}
</script>