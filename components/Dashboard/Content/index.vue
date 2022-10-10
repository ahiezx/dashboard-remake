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
      </div>

        <div class="p-5 space-y-5 mt-5" style="overflow-y: scroll;height:48vh;">
        
            <DashboardContentComponentsToggle title="Notifications" description=
            "
            Allow Siden to send you notifications when you receive a message or a friend request.
            "
            action="https://jsonplaceholder.typicode.com/todos/1" 
            ></DashboardContentComponentsToggle>
            <DashboardContentComponentsToggle title="Privacy" description="
            Allow Siden to use your data to improve your experience. Disabling this will only disable the use of your data for analytics and marketing purposes. Your data will still be used for authentication and security purposes.
            "
            action="https://jsonplaceholder.typicode.com/todos/2" 
            ></DashboardContentComponentsToggle>
            <DashboardContentComponentsToggle title="
            Dark Mode
            " description="
            Enable dark mode
            "
            action="https://jsonplaceholder.typicode.com/todos/3" 
            ></DashboardContentComponentsToggle>

            <!-- <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings> -->
            
        </div>
    </div>

    <div v-else-if="contentPage == 'leaderboard'" class="align-top m-0 p-2 bg-innerdark innerContent">
        <div class="leaderboard_table">
          <table>
            <tr>
              <th class="lb_rank">Rank</th>
              <th class="lb_xp">Rating</th>
              <th class="lb_username">Username</th>
              <th class="lb_level">Games Won</th>
            </tr>
              <tr v-for="item in 5">
                <td class="lb_rank">{{item}}</td>
                <td class="lb_xp">1000</td>
                <td class="lb_username">Ahmad</td>
                <td class="lb_level">100</td>
              </tr>
          </table>
        </div>
    </div>

    <div class="align-top m-0 p-2 bg-innerdark" v-else>

        <h1 class="p-5 bg-white rounded">nothing here to show</h1>

    </div>

</template>

<style>

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
  height: 90vh;
  margin: 0;
}

.leaderboard_table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
}

.leaderboard_table table tr {
  font-family: 'Tajawal-Bold';
  border-bottom: 2px solid #222;
}
.leaderboard_table table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.24);
}
.leaderboard_table table tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.12);
}
.leaderboard_table table tr:hover {
  /* background-color: #ddd; */
  background-color: rgba(0, 0, 0, 0.24);
}
.leaderboard_table table th {
  padding:12px;
  text-align: left;
  background-color: rgb(62, 62, 62);
  color: white;
}

.leaderboard_table table td {
  padding:12px;
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

@media only screen and (max-width: 558px) {

  .dashboard_content {
    width: 100% !important;
  }

}

</style>

<script>

export default {

    props:['contentPage'],

}

</script>