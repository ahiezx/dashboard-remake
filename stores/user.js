import { defineStore } from 'pinia'

export const userState = defineStore('userState', {

    state: () => ({
        name: 'John Doe',
        credits: 0,
        serverList: [
            { id: 1, name: 'Server 1', img: 'https://picsum.photos/id/237/200/300', owner:'Stokley'},
            { id: 2, name: 'Server 2', img: 'https://picsum.photos/id/221/200/300', owner:'Stokley'},
            { id: 3, name: 'Server 3', img: 'https://picsum.photos/id/222/200/300', owner:'Stokley'},
            { id: 4, name: 'Server 4', img: 'https://picsum.photos/id/888/200/300', owner:'Stokley'},
            { id: 5, name: 'Server 5', img: 'https://picsum.photos/id/201/200/300', owner:'Stokley'},
            { id: 6, name: 'Server 6', img: 'https://picsum.photos/id/111/200/300', owner:'Stokley'},
            { id: 7, name: 'Server 7', img: 'https://picsum.photos/id/742/200/300', owner:'Stokley'},
            { id: 8, name: 'Server 8', img: 'https://picsum.photos/id/255/200/300', owner:'Stokley'},
            { id: 9, name: 'Server 9', img: 'https://picsum.photos/id/210/200/300', owner:'Stokley'}
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