<template>

    <DashboardSidebarServers class="sidebar sidebar_servers"></DashboardSidebarServers>
    <DashboardSidebarControls class="sidebar sidebar_controls"></DashboardSidebarControls>

</template>

<style>


    .sidebar_servers {
        display:table-cell;
        width: 5%;
        background-color: #131416;
        vertical-align: top;
    }

    .sidebar_controls {
        display:table-cell;
        width: 20%;
        background-color: #111;
    }

    .sidebar_servers hr {
        background-color: #333;
        height:2px;
        border:none;
    }
    .sidebar_servers .img_obj {
        border-radius:50%;
        transition: 0.3s;
    }
    .sidebar_servers .img_obj:hover {
        transform: scale(1.1);
        border-radius:18px !important;
        transition: 0.3s;
    }
    .sidebar_servers .img_server {
        filter: grayscale(100%);
        transition: 0.3s;
    }

    .sidebar_servers .img_server:hover {
        filter: grayscale(0%);
        transition: 0.3s;
    }

</style>

<script>


</script>