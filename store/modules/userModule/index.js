const user = {
    namespaced : true,
    state(){
        return {
            authanticated: null,
            users: [
             {
                id: 1,
                email: 'zack@mail.com',
                password: 'zack123',
             }   
            ]
        }
 
   },
   getters: {
      verifiedUser(state){
        return state.authanticated
      }
   },
   mutations: {
          VERIFY(state,payload){
            let user =state.user.filter(val => val.email === payload.email)
            if(user.password === payload.password){
                state.verified=user
            }
          },
          REGISTER_NEW_USER(state,payload){
            state.user.push(payload)
          }
   },
   actions: {
      verify({commit},payload ){
        commit(VERIFY, payload)
       },
           register({commit},payload ){
        commit("REGISTER_NEW_USER", payload)
        commit("VERIFY", payload)
       },
   },

}