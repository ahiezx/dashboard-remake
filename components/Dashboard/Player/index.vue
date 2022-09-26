<template>
    <div class="flex items-center justify-center w-full ">
    
        <div class="player_components space-x-4">
            
            <i class="fas fa-play"></i>
            <i class="fas fa-pause"></i>
            <i class="fas fa-stop"></i>
            <i class="fas fa-step-forward"></i>
            <i class="fas fa-step-backward"></i>

        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style>
    

.player_components {
    @apply p-3 flex;
    color: #fff;
    position: relative;
}

</style>