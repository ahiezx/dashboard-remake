<template>
    <div>

        <div class="confirmBox" v-if="confirmBox">
            <div class="confirmBox__content">
                <div class="confirmBox__title">
                    <h2>{{message}}</h2>
                </div>
                <div class="confirmBox__buttons">
                    <button class="confirmBox__buttons--yes boxButton" @click="confirm()">Yes</button>
                    <button class="confirmBox__buttons--no boxButton" @click="revert()">No</button>
                </div>
            </div>
        </div>

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
                            <input type="checkbox"
                            v-model="checked"
                            :checked="checked" @click="assure()">
                            <i></i>
                        </label>

                    </div>
                </div>
            </div>
    </div>
</template>
<script>

export default {
    
    props: ['title', 'description', 'action', 'message'],

    data() {
        return {
            API: 'http://localhost:8000/',
            checked: false,
            confirmed: false,
            confirmBox: false,
        }
    },

    methods: {

        confirm() {
            this.confirmBox = false;
            this.request();
        },

        revert() {
            this.checked = !this.checked;
            this.confirmBox = false;
        },

        assure() {
            this.confirmBox = true;
        },

        async request() {
            // Send API request to this.action and set this.checked to the response
            let action = this.action
            const response = await fetch(action, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/html'
                }
            })
            const data = await response.json()
            console.log(data)
        }
    }

}
</script>
<style>

    .confirmBox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .confirmBox__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #222;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 400px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .confirmBox__title {
        color: white;
        text-align: center;
    }

    .confirmBox__buttons {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    .boxButton {
        background-color: #222;
        color: white;
        /* border: 1px solid white; */
        padding: 0.5rem 2rem;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        margin: 0 0.5rem;
        cursor: pointer;
        transition: all 0.1s ease-in;
    }

    .confirmBox__buttons--yes {
        background-color: #2F80ED;
    }
    .confirmBox__buttons--yes:hover {
        background-color: #2F80ED;
        box-shadow: 0 0 10px rgba(47, 128, 237, 0.5);
    }

    .confirmBox__buttons--no {
        background-color: #F87171;
    }

    .confirmBox__buttons--no:hover {
        background-color: #F87171;
        box-shadow: 0 0 10px rgba(248, 113, 113, 0.5);
    }


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