<template>

<div v-if="!route.name.includes('server-id')">
   <div class="md:text-xs sidebar_controls xffg" aria-label="Sidebar">
      <DashboardSidebarComponentsTitle title="Overview"></DashboardSidebarComponentsTitle>
      <div class="container mx-auto space-y-1.5 p-3">
         <div class="mt-1 mb-3">

            <form class="flex items-center searchbar">   
               <label for="search" class="sr-only">Search</label>
               <div class="relative w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="search" class="bg-innerdark text-gray-900 text-xs rounded-sm focus:ring-blue-500 block w-full pl-10 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
               </div>
            </form>

         </div>    

         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >Community</h4>         
         <NuxtLink class="btn-generic" to="/leaderboard"><i class="fad fa-trophy-alt"></i><span>Leaderboard</span></NuxtLink>
         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >User Overview</h4>         
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-cog"></i><span>Account</span></NuxtLink>         

         <h4
         class="text-gray-400 text-sm pt-3 font-extrabold uppercase tracking-wider"
         >Miscellaneous</h4>    
         <NuxtLink class="btn-generic bigResOnly" to="/"><i class="fad fa-info-square"></i>Support</NuxtLink>
         <NuxtLink class="btn-generic btn-generic-red bigResOnly" to="/"> Log out</NuxtLink>

         <NuxtLink class="btn-generic smallResOnly" to="/"><i class="fas fa-info"></i></NuxtLink>
         <NuxtLink class="btn-generic btn-generic-red smallResOnly" to="/"><i class="fas fa-sign-out"></i></NuxtLink>


      </div>
   </div>
</div>

<div v-else>
   <div class="md:text-xs sidebar_controls xffg" aria-label="Sidebar-Server">
      <DashboardSidebarComponentsTitle :title="route.params.id"></DashboardSidebarComponentsTitle>
      <div class="container mx-auto space-y-1.5 p-3">
         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >Server Information</h4>         
         <NuxtLink class="btn-generic" :to="'/server/'+route.params.id"><i class="fad fa-info-circle"></i><span>Server Status</span></NuxtLink>
         <NuxtLink class="btn-generic" :to="'/server/'+route.params.id + '/members'"><i class="fad fa-users"></i><span>Members</span></NuxtLink>
         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >Moderation</h4>         
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-shield"></i><span>Administration</span></NuxtLink>         
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-comments-alt"></i><span>Chat & Voice Management</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-sensor-alert"></i><span>Server Management</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fas fa-trophy-alt"></i><span>Rank System</span></NuxtLink>
         <!-- <NuxtLink class="btn-generic" to="/account"><i class="fad fa-cog"></i><span>Bot Settings</span></NuxtLink> -->
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-shield"></i><span>Roles</span></NuxtLink>
         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >Member Management</h4>                   
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-edit"></i><span>Edit Member</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-times"></i><span>Ban Member</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-slash"></i><span>Kick Member</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-lock"></i><span>Lock Member</span></NuxtLink>         
         <h4
         class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
         >Actions</h4>                  
         <NuxtLink class="btn-generic" to="/account"><i class="fad fa-user-plus"></i><span>Invite</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fas fa-envelope"></i><span>Send message</span></NuxtLink>
         <NuxtLink class="btn-generic" to="/account"><i class="fas fa-volume"></i><span>Sound Player</span></NuxtLink>
         <nuxtlink class="btn-generic btn-generic-red" to="/"><i class="fad fa-sign-out"></i><span>Leave</span></nuxtlink>
         


         <!-- <NuxtLink class="btn-generic" to="/account"><i class="fad fa-terminal"></i><span>Commands</span></NuxtLink> -->
         <!-- <NuxtLink class="btn-generic" to="/account"><i class="fad fa-microphone"></i><span>Voice Management</span></NuxtLink> -->
      </div>
   </div>
</div>

</template>

<style>

   .side_controls::-webkit-scrollbar {
  width: 10px;
}

/* Track */
   .side_controls::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
   .side_controls::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
   .side_controls::-webkit-scrollbar-thumb:hover {
  background: #555;
}

   .side_controls hr{
      border: 1px solid #242428;
      width: 90%;
   }

   .bg-periwinkle {
      background-color: #5111F3;
   }

   .btn-generic {

      @apply text-white text-left py-2 px-4 rounded;
      background-color: #25282b;
      border-radius: 3px;
      display: block;
      text-transform: capitalize;
      /* width: 100%; */
      /* width: 90%; */
      font-size:16px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      /* font-size: 0.855rem;  */
      color: #ececec;
      font-family: 'Tajawal', sans-serif !important;
      padding: 0.65rem 1.1rem;
      

   }

   .btn-generic i {
      color:#ececec;
      font-size: 16px;
      /* padding-right: 12px !important; */
      margin-right: 12px;
      vertical-align: middle;
   }

   .btn-generic span {
      vertical-align: middle !important;
      margin-top:14px;

   }

   .btn-generic:hover {
      background-color: #2f3336;
   }

   .btn-generic-red {
      background-color: #ca4343 !important;
   }

   .btn-generic-red:hover {
      background-color: #d13232 !important;
   }

   .btn-generic-green {
      background-color: #1CB25B !important;
   }

   .btn-generic-green:hover {
      background-color: #1d662a !important;
   }

   .generic-icon {
      margin-right: 0.2rem;
      font-size: 0.95rem;
   }

   .xffg .router-link-exact-active {
      background-color: #5333E4;
   }

   .xffg .router-link-active {
      background-color: #5333E4;
   }
   


</style>

<script setup>

   const route = useRoute();

</script>