<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-kyle-roxas-2138922-min.jpg" alt="">
    </div>
    <section class="contact container">
        <h1>Contact</h1>
        <section class="contact-info">
            <div class="contact-card">
                <mdicon name="linkedin" />
                <a href="https://www.linkedin.com/in/itai-nissan-b4624821a/" target="_blank">Linkedin</a>
            </div>
            <div class="contact-card">
                <mdicon name="github" />
                <a href="https://github.com/Itai-Nissan/" target="_blank">Github</a>
            </div>
            <div class="contact-card email-card">
                <div class="card-header">
                    <mdicon name="email" />
                    <span>itainissan@gmail.com</span>
                </div>
                <form class="contact-form" action="#" @submit.prevent="onSendMail">
                    <v-text-field class="name" type="text" v-model="name" placeholder="Your name.."></v-text-field>
                    <v-text-field class="email" type="email" v-model="email" placeholder="Your email.."></v-text-field>
                    <v-textarea cols="5" rows="5" v-model="msg" placeholder="Your massege.."></v-textarea>
                    <v-btn type="sumbit">Send</v-btn>
                </form>
            </div>
            <transition name="fade">
                <div v-if="visible">
                    <v-alert>Mail sent, thank you for connecting</v-alert>
                </div>
            </transition>
        </section>
    </section>
</template>


<script>
import { ref } from 'vue'

export default {
    name: 'NissfolioContact',
    setup() {
        const visible = ref(false)
        return { visible }
    },
    data() {
        return {
            navClass: 'contact-nav',
            name: '',
            email: '',
            msg: '',
        }
    },
    created() {
        this.onSetNavClass(this.navClass)
    },
    mounted() {
    },
    methods: {
        onSendMail(e) {
            if (!this.email || !this.msg) return
            else {
                Email.send({
                    SecureToken: '8319be1d-fddd-42e3-be38-8d65fc176259',
                    To: 'itainissan@gmail.com',
                    From: 'itainissan@gmail.com',
                    Subject: "Portfolio contact - " + this.name,
                    Body: "Sent from:<br>" + this.email + "<br>Massage:<br>" + this.msg
                }).then(
                    this.visible = !this.visible,
                    setTimeout(() => {
                        this.visible = !this.visible
                    },
                        3000
                    ),
                    this.name = '',
                    this.email = '',
                    this.msg = '',
                );
            }
        },
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    }
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}
</style>
