


<template>
    <div>
        <i class="fas" @click="outerMargin.toggleMargin()" :class="
        {
            'fa-expand': outerMargin.margin,
            'fa-compress': !outerMargin.margin
        }"></i>
    </div>
</template>

<script setup>
    import { useOuterMargin } from "/stores/margin";

    const outerMargin = useOuterMargin();

</script>

<style>
    
</style>