<template>

    <div v-if="contentPage == 'account'" class="align-top m-0 p-2 bg-innerdark innerContent">
        <!-- <h4 @click="playerControls.togglePlay()">{{playerControls.playing}}</h4> -->

        <div class="m-5">
          <div class="
          container mx-auto
          text-white
          text-center
          font-extrabold
          text-2xl
          p-20
          shadow-2xl
          rounded
          banner
          " style="background-image: url('https://exploringbits.com/wp-content/uploads/2022/01/discord-banner-4.gif');background-repeat: no-repeat;background-size: cover;">
            <div class="
            flex
            justify-center
            ">
              <img src="https://picsum.photos/500/500" alt="your profile" width="64" class="rounded-full align-middle mr-2 block">
            </div>
            <p class="my-auto mx-auto align-middle block">Ahmad#4444</p>

          </div>

          <div class="container mx-auto">

            <h3 class="text-3xl mt-8 font-extrabold text-white userStats mb-2">Your stats</h3>
            <div class="flex justify text-white p-3 bg-neutral-900 space-x-2 align-middle">
              <i class="mt-1 fas fa-user-friends text-1xl"></i>
              <p class="text-1xl">Friends: 0</p>
            </div>
            <div class="flex justify text-white p-3 bg-neutral-900 space-x-2 align-middle">
              <i class="mt-1 fas fa-coins text-1xl"></i>
              <p class="text-1xl">Balance: 0</p>
            </div>
            <div class="flex justify text-white p-3 bg-neutral-900 space-x-2 align-middle shadow-md">
              <i class="mt-1 fab fa-discord text-1xl"></i>
              <p class="text-1xl">Servers: 0</p>
            </div>              

          </div>          

      </div>

        <div class="p-5 space-y-5 mt-5 settingArea" style="overflow-y: scroll;">
        
            <DashboardContentComponentsToggle title="Notifications" description=
            "
            Allow Siden to send you notifications when you receive a message or a friend request.
            "
            message="Are you sure you want to toggle notifications?"
            action="https://jsonplaceholder.typicode.com/todos/1" 
            ></DashboardContentComponentsToggle>
            <DashboardContentComponentsToggle title="Privacy" description="
            Allow Siden to use your data to improve your experience. Disabling this will only disable the use of your data for analytics and marketing purposes. Your data will still be used for authentication and security purposes.
            "
            message="Are you sure you want to toggle privacy?"
            action="https://jsonplaceholder.typicode.com/todos/2" 
            ></DashboardContentComponentsToggle>
            <DashboardContentComponentsToggle title="
            Dark Mode
            " description="
            Enable dark mode
            "
            message="Are you sure you want to toggle dark mode?"
            action="https://jsonplaceholder.typicode.com/todos/3" 
            ></DashboardContentComponentsToggle>     

        </div>
        
    </div>

    <div v-else-if="contentPage == 'leaderboard'" class="align-top m-0 p-2 bg-innerdark innerContent">
        <!-- <GeneralModal></GeneralModal> -->
        <div class="leaderboard_table">
          <table>
            <tr class="lb_head">
              <th class="lb_rank">Rank</th>
              <th class="lb_xp">Rating</th>
              <th class="lb_userIcon"><span>Username</span></th>
              <th class="lb_username"></th>
              <th class="lb_level">Games Won</th>
            </tr>
              <tr v-for="(item,index) in 25" :class="{'leaderboard_top_object': index==0,'leaderboard_second_object': index==1}">
                <td class="lb_rank" :class="{'leaderboard_top': index == 0}"><span style="font-size:25px;">{{item}}</span> <i v-if="index == 0" class='fa fa-star text-xs text-yellow-300 ml-2' style="transform:translateY(-3.5px)"></i></td>
                <td class="lb_xp">1000</td>
                <td class="lb_userIcon"><img src="https://picsum.photos/500/500" :class="{'leaderboard_topOneImage': index == 0}"></td>
                <td class="lb_username align-middle">
                <span class="align-middle my-auto">Ahmad</span>
                <p class="text-gray-400 text-xs">ID10101</p>
                </td>
                <td class="lb_level">100</td>
              </tr>
          </table>
        </div>
    </div>

    <div v-else-if="contentPage == 'server'" class="align-top m-0 p-2 bg-innerdark innerContent">

      <div class="container mx-auto p-5">
        
        <header class="flex text-white items-center justify-between">
          <div class="flex items-center space-x-4">
            <img :src="currentServer.img" class="server_pic">
            <h2 class="text-2xl">

              {{currentServer.name}}

            </h2>
          </div>

        </header>

        <div
          class="flex flex-col md:flex-row md:space-x-4 mt-4"
        >
          <div class="flex-1">
            <div class="bg-neutral-900 p-4 rounded-md">
              <h3 class="text-xl font-bold">Server Info</h3>
              <p class="text-gray-400 mt-2">
                {{currentServer.name}}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<style>

.server_pic {
  width:100px;
  height:100px;
  border-radius:50%;
}

.userStats {
    @apply pb-3;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4b5157;
}

.leaderboard_top {
  height:120px;
}

.settingArea {
  height:42vh;
}



.innerContent {
  width:100% !important;
  position: relative;
}
    
.bg-innerdark {
    background-color: #242428 !important;
}

.bg-blue-generic {
  background-color:#5333E4;
}

.form-switch {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.leaderboard_table {
  overflow-y: scroll;
  /* overflow-x:hidden; */
  height: 95vh;
  margin: 0;
}

.leaderboard_table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
}

.leaderboard_table table tr {
  font-family: 'Tajawal-Bold';
  border-bottom: 2px solid #111;
  height: 50px;
  transition: all 0.3s ease-in;

}
.leaderboard_table table tr:nth-child(even) {
  background-color: rgba(86, 86, 86, 0.24);
}
.leaderboard_table table tr:nth-child(odd) {
  background-color: rgba(125, 125, 125, 0.12);
}
.leaderboard_table table tr:hover:not(.lb_head) {
  /* background-color: #ddd; */
  transition: all 0.3s ease;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.12);
}
.leaderboard_table table th {
  padding:12px;
  text-align: left;
  background-color: rgb(62, 62, 62);
  color: white;
}

.leaderboard_table table td {
  padding:16px;
  text-align: left;
  /* color: black; */
  color: white;
}


.leaderboard_table .lb_rank {
  width: 10%;
}
.leaderboard_table .lb_username {
  width: 50%;
}

.leaderboard_table .lb_userIcon {
  padding:0;
}

.lb_userIcon span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: 0;
  padding-left:13px;
}

.leaderboard_topIcon img{
  /* height:120px; */
  width:180px !important;
  margin:0 auto;
  height: 50%;
}

.leaderboard_table .lb_userIcon img{
  /* width: 4%; */
  width: 50px;
  /* align middle */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  padding:0;
}

.lb_head th{
  transition: all 0.3s ease;
  background-color: #3F3F42;
  font-size: 1.1rem;
}
.lb_head th:hover:not(.lb_username):not(.lb_level){
  transition: all 0.3s ease;
  /* height:auto; */
  background-color: rgba(237, 237, 237,0.2);
  cursor: crosshair;
}
.leaderboard_topOneImage {
  width:70px !important;
  /* border: #1CB25B 3px solid; */
  /* box-shadow: 0 0px 18px 3px #1CB25B; */
  /* height:40px; */
  /* border-radius: 50%;
  margin:0 auto;
  display: block;
  margin-left: auto;
  margin-right: auto; */
}
.leaderboard_top_object {
  border: #1CB25B 2px solid;
  box-shadow: 0 0px 18px 3px #1CB25B;
}
.leaderboard_top_object.lb_userIcon {
  width: 100px;
  border-radius: 0%;
  border:none;
}

.leaderboard_top_object.lb_userIcon img{
 min-width:120px !important;
 border-radius: 0% !important;
}

.leaderboard_second_object {
  /* border: #1CB25B 2px solid; */
  /* background-color: rgba(252, 15, 15, 0.877) !important; */
}


.leaderboard_table {
  overflow-y: scroll;
  /* overflow-x:hidden; */
  height: 95vh;
  margin: 0;
}

.form-switch i {
  @apply bg-gray-600;
  position: relative;
  display: inline-block;
  margin-right: .5rem;
  width: 46px;
  height: 26px;
  border-radius: 23px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
}
.form-switch i::before {
    @apply bg-gray-400;
  content: "";
  position: absolute;
  left: 0;
  width: 42px;
  height: 22px;
  border-radius: 11px;
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transition: all 0.25s linear;
}
.form-switch i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
  transform: translate3d(2px, 2px, 0);
  transition: all 0.2s ease-in-out;
}
.form-switch:active i::after {
  width: 28px;
  transform: translate3d(2px, 2px, 0);
}
.form-switch:active input:checked + i::after { transform: translate3d(16px, 2px, 0); }
.form-switch input { display: none; }
.form-switch input:checked + i { background-color: #1CB25B; }
.form-switch input:checked + i::before { transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0); }
.form-switch input:checked + i::after { transform: translate3d(22px, 2px, 0); }

@media (prefers-reduced-motion: reduce) {
  .form-switch i::before {
    transition-duration: 0.1s;
  }
  .form-switch i::after {
    transition-duration: 0.1s;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    
  }
  .form-switch i {
    width: 36px;
    height: 20px;
  }
  .form-switch i::before {
    width: 32px;
    height: 16px;
    border-radius: 8px;
  }
  .form-switch i::after {
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }
  .form-switch:active i::after {
    width: 20px;
  }
  .form-switch:active input:checked + i::after {
    transform: translate3d(12px, 2px, 0);
  }
  .form-switch input:checked + i::before {
    transform: translate3d(14px, 2px, 0) scale3d(0, 0, 0);
  }
  .form-switch input:checked + i::after {
    transform: translate3d(16px, 2px, 0);
  }
}

@media only screen and (max-width: 568px) {

  .dashboard_content {
    
    /* width:500px !important; */

  }

  .settingArea {
    /* width:50%; */
    height: 71.8vh;
  }

  .outer, .pack, .sidebar, .innerContent, .dashboard_content {
    /* height:113.4vh; */
    height:max-content;
  }

}

</style>

<script setup>
  
  // import user state from the store using pinia
  import { userState } from '~/stores/user'
  import { serverState } from '~/stores/server'

  const user = userState()

  const server = serverState()

  const route = useRoute();

  const currentServer = server.getServerById(route.params.id)

  console.log(currentServer)


</script>

<script>

export default {

    props:['contentPage'],

}

</script>