const navigationModule = {
    namespaced: true,
    state(){
        return {
            topMenu: [
                {
                    title: "Docs",
                    routeName: "Docs"
                },
                {
                    title: "Examples",
                    routeName: "Examples"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
            ] 
        }
    },
    getters: {
        getTopMenu(state){
            return state.topMenu
        }
    }
}

export default navigationModule