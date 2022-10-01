<template>

    <div class="align-top m-0 p-2 bg-innerdark " style="width:100%;position: relative;">
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
            
          <!-- <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-4
            
            ">

                <div class="border flex
                border-gray-700
                p-10
                rounded-sm
                shadow-lg
                bg-blue-generic
                ">
                <i class="
                fad fa-trophy
                text-4xl
                my-auto
                mr-4
                text-white
                
                "></i>                   
                <div>
                    <p class="text-gray-200 text-3xl font-extrabold uppercase">Level</p>
                    <h4 class="font-semibold text-2xl text-white">14</h4>
                </div>             

                </div>

                <div class="border flex
                border-gray-700
                p-10
                rounded-sm
                shadow-lg
                bg-blue-generic
                ">
                <i class="
                fad fa-coins
                text-4xl
                my-auto
                mr-4
                text-white
                
                "></i>                   
                <div>
                    <p class="text-gray-200 text-3xl font-extrabold uppercase">Balance</p>
                    <h4 class="font-semibold text-2xl text-white">$12,900</h4>
                </div>             

                </div>

            </div>
          </div> -->

            <DashboardContentSettings title="Notifications" description=
            "
            Allow Siden to send you notifications when you receive a message or a friend request.
            "
            action="https://jsonplaceholder.typicode.com/todos/1"
            ></DashboardContentSettings>
            <DashboardContentSettings title="Privacy" description="
            Allow Siden to use your data to improve your experience. Disabling this will only disable the use of your data for analytics and marketing purposes. Your data will still be used for authentication and security purposes.
            "
            action="https://jsonplaceholder.typicode.com/todos/2"
            ></DashboardContentSettings>
            <DashboardContentSettings title="
            Dark Mode
            " description="
            Enable dark mode
            "
            action="https://jsonplaceholder.typicode.com/todos/3"
            ></DashboardContentSettings>

            <!-- <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings>
            <DashboardContentSettings></DashboardContentSettings> -->
            
        </div>
    </div>

</template>

<style>
    
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

</style>

<script setup>
    import { usePlayerControls } from "/stores/player";

    const playerControls = usePlayerControls();
    
</script>
