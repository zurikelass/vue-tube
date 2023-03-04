import userModule from "../modules/userModule";

const userPlugin = (store) => {
    store.registerModule('users', userModule)
}
export default userPlugin