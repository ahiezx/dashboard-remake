import { defineStore } from 'pinia'

export const useOuterMargin = defineStore('outerMargin', {

    state: () => ({
        margin: false,
    }),

    getters: {
        marginState: (state) => state.margin,
    },

    actions: {

        async toggleMargin() {
            this.margin = !this.margin
        },

    },
})