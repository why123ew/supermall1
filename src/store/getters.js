const getters = {
    cartList(state) {
        return state.cartlist
    },
    cartCounter(state, getters) {
        return state.cartlist.length
    }
}
export default getters