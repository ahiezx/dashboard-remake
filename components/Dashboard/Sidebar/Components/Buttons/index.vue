<template>
    <div class="flex space-x-2 notch">
        
        <DashboardSidebarComponentsButtonsMusic/>
        <DashboardSidebarComponentsButtonsMargin/>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.notch i {
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.15s ease-in-out;
}

.notch i:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: 0.15s ease-in-out;

}

</style>