import navigationModule from "../modules/navigationModule"

const navigationPlugin = (store) => {
    store.registerModule('navigation', navigationModule)
}

export default navigationPlugin