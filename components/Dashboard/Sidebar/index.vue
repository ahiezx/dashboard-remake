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
        max-width: 50px;
        max-height: 50px;
        /* border-radius: 50%; */
        /* margin: 10px 10px 10px 10px; */
        background-color: #00AF54;
        cursor: pointer;
    }

    .sidebar_controls {
        display:table-cell;
        min-width: 248px;
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

    .smallResOnly {
        display: none;
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

    @media only screen and (max-width: 568px) {
        .sidebar {
            height: 100%;
        }
        .btn-generic-red {
            border-radius: 0px;
        }
        .sidebar_servers {
            display: none;
        }
        .sidebar_controls {
             min-width:65px;
        }
        .sidebar_controls .btn-generic span{
            /* width: 100%; */
            display: none;
        }
        .sidebar_controls .btn-generic {
            width: fit-content;
            padding:0px;
            background-color: transparent;
        }
        .sidebar_controls .sidebar_title p{
            display: none;
        }
        .sidebar_controls .searchbar {
            display: none;
        }
        .sidebar_controls h4,h5 {
            display: none;
        }
        .xffg {
            /* text-align: center; */
            padding: 2px;
        }
        .xffg i {
            /* font-size: 20px; */
            text-align: center;
            margin:auto;
        }
        .xffg .btn-generic {
            padding:15px;
            margin:0 !important;
            text-align: center;
            width: 100%;
        }
        .xffg .btn-generic:hover {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 0px;
        }
        .xffg .router-link-exact-active {
            background-color: #5333E4;
            border-radius: 0;
        }

        .xffg .router-link-active {
            background-color: #5333E4;
            border-radius: 0;
        }
        .xffg .router-link-active:hover {
            background-color: #5333E4;
        }

        .bigResOnly {
            display: none;
        }
        
        .smallResOnly {
            display: block;
        }

        
    }

</style>

<script>


</script>