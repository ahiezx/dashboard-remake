<template>
        <button
            class="w-40 h-10 text-white"
            :class="background"
            :style="s"
            >
        {{ text }}
      </button>
</template>

<style>

</style>

<script setup>
  const counter = useState('counter', () => Math.round(Math.random() * 1000))
  </script>

<script>

export default {
  data() {
    return {
      
    }
  },

  props: ['text','s', 'background', 'dismiss'],

  methods: {
    dismiss() {
      
    }
  }

}

</script>