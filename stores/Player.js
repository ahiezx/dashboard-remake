// create playerControls store with pinia

export const usePlayerControls = defineStore({
  state: () => ({
    playing: false,
    isMuted: false,
    volume: 0.5,
    playbackRate: 1,

  }),

  actions: {
    togglePlay() {
      this.playing = !this.playing
    },
  },

  getters: {
    isPlaying() {
      return this.playing
    },

}})