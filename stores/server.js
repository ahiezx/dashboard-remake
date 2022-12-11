import { defineStore } from 'pinia'

export const serverState = defineStore('serverState', {

    state: () => ({
        
    }),

    getters: {
        
    },

    actions: {
        
        async getServerById(id) {

            // return {
            //     id: id,
            //     name: 'Server ' + id,
            //     img: 'https://picsum.photos/id/'+id+'/200/300',
            //     owner: 'John Doe',
            //     members: 10,
            //     mutuals: 5,
            //     credits: 0,
            // }

            // fetch 'localhost:4000/server/<id> with GET'

            const response = await fetch(`http://localhost:4000/server/${id}`, {
                method: 'get'
            })
            const data = await response.json()
            return data
            

        },

    },

})