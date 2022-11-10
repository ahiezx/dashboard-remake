<template>
    <div class="flex items-center justify-between w-full spac">
    
        <div class="p-2.5 sticky">
            <img src="https://picsum.photos/500/500" class="w-14 h-14 float-left rounded-sm" style="border:2px solid #333;">
        </div>

        <div class="player_components space-x-4">
            <i class="fas fa-step-backward playElement p-4 bg-neutral-900 rounded-full"></i>
            <i v-if="playerControls.playState" class="fas fa-play playElement p-4 bg-neutral-900 rounded-full" 
            @click="playerControls.play"
            ></i>
            <i v-if="playerControls.pauseState"
            @click="playerControls.pause"
             class="fas fa-pause p-4 playElement bg-neutral-900 rounded-full"></i>
            <i class="fas fa-step-forward playElement p-4 bg-neutral-900 rounded-full"></i>

        </div>

        <div class="p-2.5">

            <div class="space-x-3 flex">

                <div>
                    <i class="fas fa-volume-up playElement p-4 bg-neutral-900 rounded-full"></i>
                    <!-- Volume slider -->
                    <div class="volume
                    absolute
                    w-20
                    h-2
                    bg-neutral-900
                    rounded-full
                    mt-2
                    ml-2
                    ">
                        <div class="volume_bar
                        absolute
                        w-1/2
                        h-2
                        bg-sliderColor
                        rounded-full
                        ">
                        </div>
                    </div>
                </div>

                <div>
                    <i class="fas fa-random playElement p-4 bg-neutral-900 rounded-full"></i>
                </div>

                <div>
                    <i class="fas fa-ellipsis-h playElement p-4 bg-neutral-900 rounded-full"></i>
                </div>

            </div>

        </div>

    </div>
</template>

<style>

    .bg-sliderColor {
        /* background-color: #1CB25B; */
        /* box-shadow: 0px 0px 18px 7px rgba(2, 2, 2, 0.082); */
        background-image: linear-gradient(315deg, #65ffa0 0%, #227243 74%);
        cursor: e-resize;
        /* border:1px solid #1a1a1a; */
        /* background-color:#444; */
    }
    .volume {
        position: absolute;
        bottom: 70px;
        right: 117px;
    }

</style>

<script setup>
    import { usePlayerControls } from "/stores/Player";

    const playerControls = usePlayerControls();

    // await playerControls.initAuth();
</script>

<script>

export default {
    methods: {
        test() {
            // console.log("test");
        }
    }

}
</script>


<style>
    
.playElement {
    cursor: pointer;
    background-color: #252525;
    color: #1CB25B;
    /* font-size: 20px; */
    /* padding: 10px; */
    border-radius: 50%;
    transition: all 0.2s ease;
}

.playElement:hover {

    background-color: #333;
    color: #1CB25B;



}

.player_components {
    @apply p-3 flex;
    color: #fff;
    position: relative;
}


</style>