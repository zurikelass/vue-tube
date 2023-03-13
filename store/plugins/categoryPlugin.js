import categoryModule from '../modules/categoryModule'

const categoryPlugin = (store) => {
    store.categoryModule('category', categoryModule)
}

export default categoryModule