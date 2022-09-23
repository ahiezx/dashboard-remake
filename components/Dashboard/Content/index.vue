<template>

    <div class="align-top m-0 p-2 bg-innerdark" style="width:100%;">
        <h4 @click="play()">{{playerControls.playing}}</h4>
    </div>

</template>

<style>
    
    .bg-innerdark {
        background-color: #242428 !important;
    }

</style>

<script>

export default {
    setup() {
        const playerControls = usePlayerControls();
        

        return {
            playerControls
        };
    }
}

</script>
