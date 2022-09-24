<template>

    <div class="align-top m-0 p-2 bg-innerdark" style="width:100%;position: relative;">
        <h4 @click="playerControls.togglePlay()">{{playerControls.playing}}</h4>

        <div class="flex-col space-y-5">

            <div class="
            container
            mx-auto
            ">
                <div class="grid grid-cols-2 text-white">
                    <div class="

                        mx-auto

                    ">

                        <h2 class="
                            text-2xl
                            font-extrabold
                            
                            mb-2
                        ">Account</h2>
                        <p class="
                            text-sm
                            font-regular
                            text-gray-400
                            mb-2
                        ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>
                    <div class="my-auto pt-2 mx-auto">

                    <label class="form-switch">
                        <input type="checkbox">
                        <i></i>
                        
                    </label>

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                </div>
            </div>

            <div class="
            container
            mx-auto
            ">
                <div class="grid grid-cols-2 text-white">
                    <div class="

                        mx-auto

                    ">

                        <h2 class="
                            text-2xl
                            font-extrabold
                            
                            mb-2
                        ">Account</h2>
                        <p class="
                            text-sm
                            font-regular
                            text-gray-400
                            mb-2
                        ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>
                    <div class="my-auto pt-2 mx-auto">

                    <label class="form-switch">
                        <input type="checkbox">
                        <i></i>
                        
                    </label>

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                    <div class="">

                        <!-- <p>dasd</p> -->

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
    
    .bg-innerdark {
        background-color: #242428 !important;
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
