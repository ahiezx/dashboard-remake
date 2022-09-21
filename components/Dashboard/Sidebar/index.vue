<template>
    <div class="sidebar">

        <DashboardSidebarServers class="sidebar sidebar_servers"></DashboardSidebarServers>
        <DashboardSidebarControls class="sidebar sidebar_controls"></DashboardSidebarControls>

        
    </div>
</template>

<style>
    
    .sidebar {
        display:inline-block;
        vertical-align:top;
        height:100vh;
    }

    .sidebar_controls {
        width:20vw;
        background-color:#1a151e;
    }
    .sidebar_servers {
        background-color: #131416;
        width:6.5vw;
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