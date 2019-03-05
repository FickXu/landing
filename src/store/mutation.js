const mutations = {
    getUser(state, user) {
        state.loginUser = user;
    },
    setUser(state, user) {
        state.loginUser = user;
    }
}

export default mutations;