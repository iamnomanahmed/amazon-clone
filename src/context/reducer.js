export const initialState = {
    basket :[],
}
// SELECTOR

export const getBasketTotal = (basket) =>{
    basket?.reduce((amount, item)=> item.price + amount, 0)
}
const reducer =(state,action)=>{

    switch(action.type){
        case  'ADD_BASKET': return {
            ...state,
            basket: [...state.basket,action.item]
            
        }
        default : 
        return state;
    }
}

export default reducer