import { defineStore } from 'pinia'

export const usePlayerControls = defineStore('playerControls', {

    state: () => ({
        playing: true,
    }),

    getters: {
        isPlaying: (state) => state.playing,
    },

    actions: {

        async togglePlay() {
            this.playing = !this.playing
        },

    },
})