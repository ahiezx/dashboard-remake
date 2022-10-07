<template class="">


    <DashboardSidebarServers class="sidebar sidebar_servers"></DashboardSidebarServers>
    <DashboardSidebarControls class="sidebar sidebar_controls"></DashboardSidebarControls>

</template>

<style>

    .sidebar {
        height: 100vh;
    }

    .sidebar_servers {
        display:table-cell;
        min-width: 70px;
        background-color: #131416;
        vertical-align: top;
    }

    .sidebar_servers .img_obj {
        width: 50px;
        height: 50px;
        /* border-radius: 50%; */
        /* margin: 10px 10px 10px 10px; */
        background-color: #00AF54;
        cursor: pointer;
    }

    .sidebar_controls {
        display:table-cell;
        min-width: 200px;
        background-color: #1e1e20;
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

    @media only screen and (max-width: 768px) {
        .sidebar {
            height: 100%;
        }
        .sidebar_servers {
            display: none;
        }
        .sidebar_controls {
            display:table-cell;
            min-width: 200px;
            background-color: #1e1e20;
        }
        
    }

    @media only screen and (max-width: 558px) {
        .sidebar {
            height: 100%;
        }
        .sidebar_servers {
            display: none;
        }
        .sidebar_controls {
             
        }
        .sidebar_controls .btn-generic span{
            /* width: 100%; */
            display: none;
        }
        .sidebar_controls .btn-generic {
            width: fit-content;
        }
        .sidebar_controls .sidebar_title {
            display: none;
        }
        .sidebar_controls #simple-search {
            display: none;
        }
        
        
    }

</style>

<script>


</script>