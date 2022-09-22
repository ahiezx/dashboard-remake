<template>

    <div class="text-white p-3 sidebar_title font-extrabold flex" :class="{'bg-green': true}">
        <div>
            <p>{{title}}</p>
        </div>
        <div class="ml-auto">
            <DashboardSidebarComponentsButtons></DashboardSidebarComponentsButtons>
        </div>        
    </div>

</template>

<style>

.sidebar_title{
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    background-color: #5111F3;
}

.bg-green {
    background-color: #00AF54 !important;
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