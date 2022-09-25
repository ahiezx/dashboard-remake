<template>
    <div>
        <div class="text-white p-3 sidebar_title font-extrabold flex" :class="{'bg-green': playerControls.playing}">
            <div>
                <p>{{title}}</p>
            </div>
            <div class="ml-auto">
                <DashboardSidebarComponentsButtons></DashboardSidebarComponentsButtons>
            </div>        
        </div>
    </div>

</template>

<style>

.sidebar_title{
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    background-color: #5333E4;
}

.bg-green {
    background-color: #1CB25B !important;
}

</style>

<script>

export default {

    props: {
        title: {
            type: String,
            default: "Overview"
        }
    }
}

</script>


<script setup>
    import { usePlayerControls } from "/stores/player";

    const playerControls = usePlayerControls();
  
    const { user, isPlaying } = playerControls;
  
    // await playerControls.initAuth();
</script>