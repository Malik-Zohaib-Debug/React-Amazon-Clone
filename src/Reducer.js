const AppReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.payload]
            };
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                basket: state.basket.filter(productID => productID.id !== action.payload)
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;