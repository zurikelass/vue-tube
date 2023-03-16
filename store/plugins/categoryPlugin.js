
import categoryModule from "../modules/categoryModule";

const categoryPlugin = (store) => {
    store.registerModule('categories', categoryModule)
}
export default categoryPlugin