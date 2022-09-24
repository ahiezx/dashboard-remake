<template>

<div class="bg-black md:text-xs side_controls" aria-label="Sidebar-1">
   <DashboardSidebarComponentsTitle title="Overview"></DashboardSidebarComponentsTitle>
   <div class="p-3 space-y-1.5 space-x-1">
      <div class="mt-1 mb-3">

         <form class="flex items-center">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
               <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                     <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
               </div>
               <input type="text" id="simple-search" class="bg-innerdark text-gray-900 text-xs rounded-sm focus:ring-blue-500 block w-full pl-10 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
            </div>
         </form>

      </div>
      <h4
      class="text-gray-400 text-sm pt-1 font-extrabold uppercase tracking-wider"
      >Siden Community</h4>
      <NuxtLink class="btn-generic" to="/"> Find Servers</NuxtLink>
      <NuxtLink class="btn-generic" to="/"> Leaderboard</NuxtLink>
      <!-- <hr> -->
      <h4
      class="text-gray-400 text-sm pt-3 font-extrabold uppercase tracking-wider"
      >User Overview</h4>
      <NuxtLink class="btn-generic" to="/"> Account</NuxtLink>
      <NuxtLink class="btn-generic" to="/"> Statistics</NuxtLink>
      <NuxtLink class="btn-generic" to="/"> Friends</NuxtLink>

      <h5 class="text-gray-600 text-sm pt-1 font-extrabold uppercase">
         Other
      </h5>

      <NuxtLink class="btn-generic" to="/"> Support</NuxtLink>
      <NuxtLink class="btn-generic btn-generic-red" to="/"> Log out</NuxtLink>
   </div>
</div>

</template>

<style>

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
      /* font-size: 0.855rem;  */
      color: #ececec;
      font-family: 'Tajawal', sans-serif !important;
      padding: 0.65rem 1.1rem;
      

   }

   .btn-generic:hover {
      background-color: #2f3336;
   }

   .btn-generic-red {
      background-color: #ca4343;
   }

   .btn-generic-red:hover {
      background-color: #cf2525;
   }

   .generic-icon {
      margin-right: 0.2rem;
      font-size: 0.95rem;
   }

</style>

<script>

</script>