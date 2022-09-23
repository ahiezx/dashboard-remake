


<template>
    <div>
        <i class="fa-sharp fa-solid fa-expand" @click="outerMargin.toggleMargin()"></i>
    </div>
</template>

<script setup>
    import { useOuterMargin } from "/stores/margin";

    const outerMargin = useOuterMargin();

</script>

<style>
    
</style>