const user = {
    namespaced : true,
    state(){
        return {
            authanticated: null,
            users: [
             {
                id: 1,
                name: 'Zack',
                email: 'zack@mail.com',
                password: 'zack123',
             }   
            ]
        }
 
   },
   getters: {
      authanticatedUser(state){
        return state.authanticated
      }
   },
   mutations: {
          AUTHENTICATE(state,payload){
            let user =state.user.filter(val => val.email === payload.email)
            if(user.password === payload.password){
                state.authanticated =user
            }
          },
          REGISTER_NEW_USER(state,payload){
            state.user.push(payload)
          }
   },
   actions: {
       authanticate({commit},payload ){
        commit(AUTHENTICATE, payload)
       },
           register({commit},payload ){
        commit(REGISTER_NEW_USER, payload)
        commit(AUTHENTICATE, payload)
       },
   },

}