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
                    title: "Home",
                    routeName: "Home"
                },
                {
                    title: "Blog",
                    routeName: "Blog"
                },
                {
                    title: "Music",
                    routeName: "Music"
                },
                {
                   title: "Settings",
                   routeName: "Settings"
                },
                {
                    title: "Guns",
                    routeName: "Guns"
                 
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