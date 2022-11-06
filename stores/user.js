import { defineStore } from 'pinia'

export const userState = defineStore('userState', {

    state: () => ({
        name: 'John Doe',
        credits: 0,
        serverList: [
            { id: 1, name: 'Server 1', img: 'https://picsum.photos/id/' + 1 + '/200/300'},
            { id: 2, name: 'Server 2', img: 'https://picsum.photos/id/' + 2 + '/200/300'},
            { id: 3, name: 'Server 3', img: 'https://picsum.photos/id/' + 3 + '/200/300'},
            { id: 4, name: 'Server 4', img: 'https://picsum.photos/id/' + 4 + '/200/300'},
            { id: 5, name: 'Server 5', img: 'https://picsum.photos/id/' + 5 + '/200/300'},
            { id: 6, name: 'Server 6', img: 'https://picsum.photos/id/' + 6 + '/200/300'},
            { id: 7, name: 'Server 7', img: 'https://picsum.photos/id/' + 7 + '/200/300'},
            { id: 8, name: 'Server 8', img: 'https://picsum.photos/id/' + 8 + '/200/300'},
            { id: 9, name: 'Server 9', img: 'https://picsum.photos/id/' + 9 + '/200/300'}
        ],
        settings: {
            theme: 'dark',
            notifications: true,
        },
    }),

    getters: {
        getServers: (state) => state.serverList,
    },

    actions: {

        async toggleMargin() {
            this.margin = !this.margin
        },

        getServerById(id) {
            return this.serverList.find(server => server.id === parseInt(id))
        }

    },
})