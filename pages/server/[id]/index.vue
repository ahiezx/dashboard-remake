<template>


</template>

<style>

.body, html {
    background-color: rgb(56, 56, 56);
    overflow-y: hidden;
}

.pack {
    /* display: flex; */
    /* flex-direction: row; */
    /* min-height: 100%; */
    height: 100vh !important;
    transition: all 0.5s ease;
    border-radius: 3px;
    box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.5);
}

.outer {
    display:table;
    width:100%;
}

.outer_margin {
    margin: 12px 12px 12px 12px;
}

.outer_margin .sidebar.sidebar_servers{
    /* overflow-y: scroll; */
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
}

.outer_margin .player_controls {
    overflow-y: scroll;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.outer_margin .dashboard_content {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    /* height: calc(100vh - 24px); */
    /* min-height: 15vh; */
}
    
.dashboard_sidebar {
    display:table-cell;
    width:20%;
    /* overflow-y: scroll; */
    background-color: #131416;
    vertical-align: top;
}

.dashboard_content {
    display:table-cell;
    width:80%;
    height: 100vh;
    
    background-color: rgb(31, 31, 31);
}

@media only screen and (max-width: 768px) {
    .dashboard_content {
        
    }
    .player_controls {
        position: absolute;
        bottom:0px;
        background-color: rgb(31, 31, 31);
        width:100%;
    }
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