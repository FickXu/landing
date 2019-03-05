export const getUser = ({commit}) => {
    setTimeout(() => {
        commit('getUser', {
            username: 'Fick',
            warename: 'Base Project'
        })
    }, 2000);
}

export const setUser = ({commit}, obj) => {
    setTimeout(() => {
        commit('setUser', obj)
    }, 2000);
}