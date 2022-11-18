import { defineStore } from 'pinia'

export const serverState = defineStore('serverState', {

    state: () => ({
        
    }),

    getters: {
        
    },

    actions: {
        
        getServerById(id) {

            // console.log(id)

            return {
                id: id,
                name: 'Server ' + id,
                img: 'https://picsum.photos/id/'+id+'/200/300',
                owner: 'John Doe',
                members: 10,
                mutuals: 5,
                credits: 0,
            }

        },

    },

})