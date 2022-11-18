import { defineStore } from 'pinia'

export const usePlayerControls = defineStore('playerControls', {

    state: () => ({
        playing: false,
        
        // player button states
        playState: true,
        pauseState: false,
        stopState: false,
        nextState: false,
        previousState: false,
        shuffleState: false,
        repeatState: false,

    }),

    getters: {
        isPlaying: (state) => state.playing,
        isPaused: (state) => !state.pauseState,
        // isShuffled: (state) => state.shuffleState,
        // isRepeating: (state) => state.repeatState,
    },

    actions: {

        async togglePlay() {
            this.playing = !this.playing
        },

        async play() {
            
            if (this.playState) {
                this.playState = false
                this.pauseState = true
            }
            else {
                this.playState = true
                this.pauseState = false
            }

        },
        async pause() {
            
            if (this.pauseState) {
                this.playState = true
                this.pauseState = false
            }
            else {
                this.playState = false
                this.pauseState = true
            }

            

        },
        async stop() {
            
        },
        async next() {
            
        },
        async previous() {
            
        }

    },

    persist: true,
})