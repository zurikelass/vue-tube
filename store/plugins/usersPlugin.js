import usersModule from "../modules/usersModule";

const usersPlugin = (store) => {
    store.registerModule('users', usersModule)
}
export default usersPlugin