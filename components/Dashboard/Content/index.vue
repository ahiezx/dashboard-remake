<template>

    <div class="align-top m-0 p-2 bg-innerdark" style="width:100%;">
        <h4 @click="playerControls.togglePlay()">{{playerControls.playing}}</h4>
    </div>

</template>

<style>
    
    .bg-innerdark {
        background-color: #242428 !important;
    }

</style>

<script setup>
    import { usePlayerControls } from "/stores/player";

    const playerControls = usePlayerControls();
    
</script>
