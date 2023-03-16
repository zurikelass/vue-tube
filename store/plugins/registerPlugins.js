import registerModule from "../modules/registerModule";

const registerPlugin = (store) => {
    store.registerModule('register', registerModule)
    
}
export default registerPlugin