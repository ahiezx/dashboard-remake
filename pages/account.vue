<template>

        <DashboardContent class="dashboard_content" contentPage="account"></DashboardContent>

</template>

<style>
    
@media only screen and (max-width: 768px) {

}
</style>

<script setup>

// Use useAuthStore from pinia to get the user
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

auth.register('ahmad7499aff','ahmad123')

</script>