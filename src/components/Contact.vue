<template>
    <section id="contact">
        <v-layout
        pa-5
        wrap>
            <!-- Header flex -->
            <v-flex xs12>
                <h2 class="display-2 font-weight-bold primary--text mb-4">Let's talk</h2>
            </v-flex>

            <!-- Sub desc flex -->
            <v-flex xs12 md5 mb-4 :pr-5="$vuetify.breakpoint.mdAndUp">
                <h2 class="primary--text title font-weight-light text-uppercase mb-2">What can I do for you?</h2>
                <div class="subheading mb-5">
                    Have anything that you would like to say to me? Well you are more than welcome to do so. Please fill out the form below and hit that send button or else get in touch using the details given along with the form.
                </div>
                <h2 class="primary--text title font-weight-light text-uppercase mb-3">Send me a message</h2>
                <v-form
                ref="form"
                method="post"
                lazy-validation
                v-model="formIsValid"
                autocomplete="off"
                autofill="off"
                >
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field
                            label="Name"
                            solo-inverted
                            flat
                            v-model="name"
                            :rules="nonEmptyRule"
                            required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                            label="Email"
                            flat
                            solo-inverted
                            v-model="email"
                            :rules="emailRules"
                            required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                            label="Subject"
                            v-model="subject"
                            :rules="nonEmptyRule"
                            flat
                            solo-inverted
                            required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea
                            solo-inverted
                            flat
                            :rules="nonEmptyRule"
                            v-model="message"
                            label="Message"
                            required
                            ></v-textarea>
                        </v-flex>

                        <v-flex xs12 :class="{ 'mb-2': successAlert }">
                            <v-alert
                            :value="successAlert"
                            type="success">
                                Message Sent.
                            </v-alert>
                        </v-flex>

                        <v-flex xs12 :class="{ 'mb-2': infoAlert }">
                            <v-alert
                            :value="infoAlert"
                            type="info">
                                Sending....
                            </v-alert>
                        </v-flex>

                        <v-flex xs12 :class="{ 'mb-2': errorAlert }">
                            <v-alert
                            :value="errorAlert"
                            type="error">
                                Unable to send the message.
                            </v-alert>
                        </v-flex>

                        <v-flex text-xs-right>
                            <v-btn
                            color="primary"
                            type="submit"
                            ref="submitBtn"
                            @click.native="sendEmail($event)"
                            :disabled="!formIsValid">
                                Send <v-icon class="ml-2">mdi-send</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>

            <!-- The contact info block -->
            <v-flex
            xs12 md3 text-xs-left>
                <h2 class="primary--text title font-weight-light text-uppercase">Social Contacts</h2>

                <!-- Social Links -->
                <div class="my-4">
                    <a class="mx-2"
                    v-for="(icon, i) in socialIcons"
                    :title="icon.name"
                    :key=i
                    target="_blank"
                    :href="icon.link">
                        <v-icon>{{ icon.icon }}</v-icon>
                    </a>
                </div>

                <!-- The list with details -->
                <v-list class="transparent" three-line>
                    <v-list-tile
                    avatar
                    v-for="(det, i) in contactDetails"
                    :key=i>
                        <v-list-tile-avatar>
                            <v-icon
                            color="primary"
                            class="mr-5"
                            style="font-size: 48px;"
                            >{{ det.icon }}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title class="mr-2 primary--text">{{ det.title }}</v-list-tile-title>

                            <v-list-tile-sub-title>
                                {{ det.val }}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>

            <!-- The image block -->
            <v-flex
            xs12 md4>
                <v-img contain style="top: 95px;"
                src="https://material-portfolio-dark.vuetifyjs.com/img/john-alt.7fef353c.png"></v-img>
            </v-flex>
        </v-layout>
    </section>
</template>


<script>

// Include the jQuery, Vue, why you no love jQuery?
import $ from 'jquery'

export default {
    data () {
        return {
            // Form model directives
            formIsValid: true,
            name: "",
            email: "",
            subject: "",
            message: "",

            // Alert visibility directives
            successAlert: false,
            infoAlert: false,
            errorAlert: false,

            nonEmptyRule: [
                v => !!v || "This field can't be empty"
            ],

            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],

            contactDetails: [
                {"title": "Address", "val": "Jaipur, RJ, India", "icon": "mdi-map-marker"},
                {"title": "Phone", "val": "+91-8302716971", "icon": "mdi-phone"},
                {"title": "Email", "val": "me@nicksuniversum.com", "icon": "mdi-email"}
            ],

            socialIcons: [
                {"name": "Facebook", "link": "https://fb.me/ydvnick", "icon": "mdi-facebook"},
                {"name": "Github", "link": "https://github.com/black-dragon74", "icon": "mdi-github-circle"},
                {"name": "Telegram", "link": "https://t.me/ydvnick", "icon": "mdi-telegram"},
            ]
        }
    },

    methods: {
        sendEmail: function (event) {
            // Prevent the form's default behavior
            event.preventDefault();

            // Validate the form, if errors, exit right away
            if (!this.$refs.form.validate()) {
                return;
            }

            // Else we now get the values from the model objects
            const name = this.name;
            const email = this.email;
            const subject = this.subject;
            const message = this.message;

            var instance = this;

            // Hey jQuery! Here I come
            $.ajax({
                url: "https://nicksuniversum.com/nmail.php",

                data: {
                    "name": name,
                    "email": email,
                    "subject": subject,
                    "message": message
                },

                type: "post",

                beforeSend: function() {
                    instance.infoAlert = true;
                    instance.formIsValid = false;
                },

                success: function(response) {
                    instance.infoAlert = false;
                    if (response == "Success") {
                        instance.successAlert = true;
                    }
                    else {
                        instance.errorAlert = true;
                    }

                    // Reset
                    setTimeout(function() { 
                        instance.successAlert = false;
                        instance.errorAlert = false;
                        instance.$refs.form.reset();
                        instance.formIsValid = true;
                     }, 3000);
                },

                error: function() {
                    instance.infoAlert = false;
                    instance.errorAlert = true;

                    // Reset
                    setTimeout(function() { 
                        instance.successAlert = false;
                        instance.errorAlert = false;
                        instance.$refs.form.reset();
                        instance.formIsValid = true;
                     }, 3000);
                }
            });
        }
    }
}
</script>



<style scoped>
    section {
        position: relative;
    }

    a {
        text-decoration: none;
    }
</style>
