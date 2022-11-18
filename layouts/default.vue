<template>
    
    <div v-if="auth.isAuthenticated">

        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css">
        <div class="outer">
        <div class="pack" :class="{'outer_margin': outerMargin.margin}">    
            <DashboardSidebar class="dashboard_sidebar"></DashboardSidebar>  
            <slot/>  
            <div style="position:relative;" v-if="player.isPlaying">
            <DashboardPlayer class="player_controls"></DashboardPlayer>
        </div>            
        </div>
        
        </div>  


    </div>

    <div v-else>

        <div class="loginForm">

            <div class="loginForm__container">

                <div class="loginForm__container__header">

                    <h1 class="loginForm__container__header__title">Login</h1>

                </div>
                <p class="text-center text-red-500 mt-5">{{message}}</p>

                <div class="loginForm__container__body">

                    <div class="loginForm__container__body__input">

                        <input type="text" placeholder="Username" v-model="username" class="loginForm__container__body__input__input">

                    </div>

                    <div class="loginForm__container__body__input">

                        <input type="password" placeholder="Password" v-model="password" class="loginForm__container__body__input__input">

                    </div>

                    <div class="loginForm__container__body__button">

                        <button class="loginForm__container__body__button__button" @click="login(username,password)">Login</button>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<style>


.loginForm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #131416;
}

.loginForm__container {
    width: 400px;
    height: 400px;
    background-color: #1f1f1f;
    border-radius: 5px;
    box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.5);
}

.loginForm__container__header {
    width: 100%;
    height: 50px;
    background-color: #131416;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginForm__container__header__title {
    color: #fff;
    font-size: 20px;
}

.loginForm__container__body {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loginForm__container__body__input {
    width: 80%;
    height: 50px;
    margin-bottom: 20px;
}

.loginForm__container__body__input__input {
    width: 100%;
    height: 100%;
    background-color: #1f1f1f;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    color: #fff;
    font-size: 20px;
}

.loginForm__container__body__button {
    width: 80%;
    height: 50px;
}

.loginForm__container__body__button__button {
    width: 100%;
    height: 100%;
    background-color: #131416;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}


.body, html {
    background-color: rgb(56, 56, 56);
    overflow-y: hidden;
}

.pack {
    /* display: flex; */
    /* flex-direction: row; */
    /* min-height: 100%; */
    height: 100vh !important;
    transition: all 0.5s ease;
    border-radius: 3px;
    box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.5);
}

.outer {
    display:table;
    width:100%;
}

.outer_margin {
    margin: 12px 12px 12px 12px;
}

.outer_margin .sidebar.sidebar_servers{
    /* overflow-y: scroll; */
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
}

.outer_margin .player_controls {
    overflow-y: scroll;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.outer_margin .dashboard_content {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    /* height: calc(100vh - 24px); */
    /* min-height: 15vh; */
}
    
.dashboard_sidebar {
    display:table-cell;
    width:20%;
    /* overflow-y: scroll; */
    background-color: #131416;
    vertical-align: top;
}

.dashboard_content {
    display:table-cell;
    width:80%;
    height: 100vh;
    
    background-color: rgb(31, 31, 31);
}

@media only screen and (max-width: 768px) {
    .dashboard_content {
        
    }
    .player_controls {
        position: absolute;
        bottom:0px;
        background-color: rgb(31, 31, 31);
        width:100%;
    }
}

::-webkit-scrollbar {
  width: 7px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
  background: #333;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4b5157;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.player_controls {
    /* overflow-y: scroll; */
    position: absolute;
    bottom:0px;
    background-color: rgb(31, 31, 31);
    width:100%;
    
    /* border:1px solid white; */
    box-shadow: 0px 0px 18px 7px rgba(2, 2, 2, 0.082);
    border-top:3px solid #1CB25B;
}

</style>


<script setup>
    import { useOuterMargin } from "/stores/margin";
    import { usePlayerControls } from "/stores/player";
    import { useAuthStore } from '@/stores/auth'

    const outerMargin = useOuterMargin();
    const player = usePlayerControls();

    const auth = useAuthStore()

</script>

<script>

export default {

    data() {

        return {

            username: '',

            password: '',

            message: ''

        }

    },

    methods: {

        async login(username, password) {

            const response = await this.auth.login(username, password)

            this.message = response.message


        }

    }

}

</script>