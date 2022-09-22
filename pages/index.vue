<template>

    <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

        <!-- <h1 class="firstColor text-5xl lowercase">Ahmad Bakdalieh</h1> -->
        <!-- <dashboard text="test" s="background-color:black;margin:15px;" background="bg-stone-700"  :dismiss="true"></DashButton> -->
        <div class="outer">
            <DashboardSidebar class="dashboard_sidebar"></DashboardSidebar>
            <DashboardContent class="dashboard_content"></DashboardContent>
        </div>
    </div>

</template>

<style>

.outer {
    display:table;
    width:100%;
    height:100vh;
}

.dashboard_sidebar {
    display:table-cell;
    width:20%;
    background-color: #131416;
    vertical-align: top;
}

.dashboard_content {
    display:table-cell;
    width:80%;
    background-color: rgb(31, 31, 31);
}

</style>

<script>
</script>