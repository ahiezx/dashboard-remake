<template>

<div class="bg-black md:text-xs" aria-label="Sidebar-1">
   <DashboardSidebarComponentsTitle title="Overview"></DashboardSidebarComponentsTitle>
   <div class="p-3 space-y-2">
      <NuxtLink class="btn-generic" to="/"><i class="fa-brands fa-discord generic-icon"></i> Find Servers</NuxtLink>
      <NuxtLink class="btn-generic" to="/"><i class="fa-brands fa-discord generic-icon"></i> Leaderboard</NuxtLink>
      <NuxtLink class="btn-generic" to="/">Premium</NuxtLink>
      <NuxtLink class="btn-generic" to="/">Nuxt website</NuxtLink>
      <NuxtLink class="btn-generic" to="/">Nuxt website</NuxtLink>
   </div>
</div>

</template>

<style>

   .btn-generic {

      @apply text-white text-left py-2 px-4 rounded;
      background-color: #25282b;
      border-radius: 3px;
      display: block;
      text-transform: uppercase;
      width: 100%;
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

   .generic-icon {
      margin-right: 0.2rem;
      font-size: 0.95rem;
   }

</style>

<script>

</script>