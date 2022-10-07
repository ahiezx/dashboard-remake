<template>
    <div>
        <div class="
            container
            mx-auto
            toggleSwitch
            ">
                <div class="grid grid-cols-2 text-white">
                    <div class="

                        

                    ">

                        <h2 class="
                            text-2xl
                            font-extrabold
                            
                            mb-2
                        ">{{title}}</h2>
                        <p class="
                            text-sm
                            font-regular
                            text-gray-400
                            mb-2
                        ">{{description}}</p>

                    </div>
                    <div class="my-auto pt-2
                        text-right
                    ">

                        <label class="form-switch">
                            <input type="checkbox" :checked="checked" @click="sendAPI()">
                            <i></i>
                        </label>

                    </div>
                </div>
            </div>
    </div>
</template>
<script>

export default {
    
    props: ['title', 'description', 'action'],

    data() {
        return {
            API: 'http://localhost:8000/',
            checked: false
        }
    },

    methods: {

        async sendAPI() {
            // Send API request to this.action and set this.checked to the response
            let action = this.action
            const response = await fetch(action, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/html'
                }
            })
            const data = await response.json()
            this.checked = !this.checked
            console.log(data)
        }
    }

}
</script>
<style>
    @media only screen and (max-width: 768px) {
        .toggleSwitch {
            /* padding: 1rem; */
        }
        .toggleSwitch h2 {
            font-size: 1.2rem !important;
        }
        .toggleSwitch p {
            font-size: 0.8rem !important;
        }
    }
</style>