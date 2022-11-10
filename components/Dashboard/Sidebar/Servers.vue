<template>

    <aside class="flex space-y-3" aria-label="Sidebar-1" style="padding:0.9vw;">
      
        <div class="mx-auto">
            <NuxtLink to="/account"><img src="https://picsum.photos/500/500"  width="500" class="mx-auto my-auto img_obj"></NuxtLink>
        </div>

        <div>
            <hr>
        </div>

        <div class="mx-auto space-y-3 server_list" v-for="server in user.serverList">
            <NuxtLink :to="'/server/'+server.id"><img :src="server.img" width="128" class="mx-auto my-auto img_obj img_server"></NuxtLink>
        </div>

    </aside>
    
    </template>
    
    <style>
    
    
        
        .server_list .router-link-active .img_obj{
            border: 2px solid #1CB25B;
            filter: brightness(1.2);
        }
        .server_list .router-link-active .img_obj:hover{
            border: 2px solid #1CB25B;
            border-radius: 50% !important;
            filter: brightness(1.2);
        }
        .server_list .router-link-active .img_obj:active{
            border: 2px solid #7289da;
        }
    
    </style>
    
    <script setup>
        import { userState } from "/stores/user";

        const user = userState();

    </script>

    <script>

    </script>