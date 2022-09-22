<template>
    <div>
        
        <NuxtLink :to="link">dd{{content}}</NuxtLink>

    </div>
</template>
<script>
export default {
    
    props: ['link','content']

}
</script>
<style>
    
</style>