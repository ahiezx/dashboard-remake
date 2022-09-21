<template>

    <div class="text-white p-3 sidebar_title font-extrabold">
        <p>{{title}}</p>
    </div>

</template>

<style>

.sidebar_title{
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    background-color: #7733e4;
}

</style>

<script>

export default {
    props: {
        title: {
            type: String,
            default: "Overview"
        }
    }
}

</script>