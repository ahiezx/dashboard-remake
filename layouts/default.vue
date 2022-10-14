<template>
    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    <slot/>

</template>

<style>

::-webkit-scrollbar {
  width: 7px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
  background: #333;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4b5157;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.player_controls {
    /* overflow-y: scroll; */
    position: absolute;
    bottom:0px;
    background-color: rgb(31, 31, 31);
    width:100%;
    
    /* border:1px solid white; */
    box-shadow: 0px 0px 18px 7px rgba(2, 2, 2, 0.082);
    border-top:3px solid #1CB25B;
}

</style>

<script>

</script>