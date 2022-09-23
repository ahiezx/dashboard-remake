<template>
    <div>
        <i class="fas fa-music" @click="playerControls.togglePlay()"></i>
    </div>
</template>

<script setup>
    import { usePlayerControls } from "/stores/player";
    const playerControls = usePlayerControls();

    const { playing } = playerControls;
</script>

<style>
    
</style>