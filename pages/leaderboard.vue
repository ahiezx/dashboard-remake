<template>

    <div>
        <!-- <h1 class="firstColor text-5xl lowercase">Ahmad Bakdalieh</h1> -->
        <!-- <dashboard text="test" s="background-color:black;margin:15px;" background="bg-stone-700"  :dismiss="true"></DashButton> -->
        <div class="outer">
            <div class="pack" :class="{'outer_margin': outerMargin.margin}">
                <DashboardSidebar class="dashboard_sidebar"></DashboardSidebar>
                <DashboardContent class="dashboard_content" contentPage="leaderboard"></DashboardContent>
                <div style="position:relative;" v-if="player.playing">
                    <DashboardPlayer class="player_controls"></DashboardPlayer>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

.body, html {
    background-color: rgb(56, 56, 56);
    /* overflow-y: hidden; */
}

.pack {
    /* display: flex; */
    /* flex-direction: row; */
    height: 100%;
    transition: all 0.5s ease;
    border-radius: 3px;
    box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.5);
}

.player_controls {
    position: absolute;
    bottom:0px;
    background-color: #00AF54;
    width:100%;
}

.outer {
    display:table;
    width:100%;
}

.outer_margin {
    margin: 12px 12px 12px 12px;
}

.outer_margin .sidebar.sidebar_servers{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
}

.outer_margin .player_controls {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.outer_margin .dashboard_content {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    height: calc(100vh - 24px);
}
    
.dashboard_sidebar {
    display:table-cell;
    width:20%;
    background-color: #131416;
    vertical-align: top;
}

.dashboard_content {
    display:table-cell;
    width:100%;
    height:100vh;
    background-color: rgb(31, 31, 31);
}

</style>

<script setup>
    import { useOuterMargin } from "/stores/margin";
    import { usePlayerControls } from "/stores/player";

    const outerMargin = useOuterMargin();
    const player = usePlayerControls();

</script>
<script>

</script>