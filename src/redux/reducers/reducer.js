import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, LOGIN, LOGOUT,FETCH_PRODUCT, FETCHED_PRODUCT } from "../actions/action-types/cartActionsTypes"

const firstState = {
    products: [
        // { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1, changedPriceOfProduct: 110, },
        // { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2, changedPriceOfProduct: 80, },
        // { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3, changedPriceOfProduct: 120, },
        // { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4, changedPriceOfProduct: 260, },
        // { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5, changedPriceOfProduct: 160, },
        // { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6, changedPriceOfProduct: 90, }
    ],
    addedProductsToCart: [],
    totalAmountOfCart: 0,
    isAdmin: false,
    isLoggedIn: false,
}

const cartReducer = (state = firstState, action) => {
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item=> {console.log(item.id,action.id); return item.id === action.id});
        console.log(addedItem);
        //check if the action id exists in the addedItems
       let existed_item = state.addedProductsToCart.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
          addedItem.changedPriceOfProduct = addedItem.quantity * addedItem.price;
           return{
              ...state,
               totalAmountOfCart: state.totalAmountOfCart + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.totalAmountOfCart + addedItem.price;
          addedItem.changedPriceOfProduct = addedItem.quantity * addedItem.price; 
          
          return{
              ...state,
              addedProductsToCart: state.addedProductsToCart.concat(addedItem),
              totalAmountOfCart : newTotal
          }
          
      }
  }
    if (action.type === REMOVE_FROM_CART) {
        let products_to_remove = state.addedProductsToCart.find(product => action.id === product.id);
        let newProducts = state.addedProductsToCart.filter(product => action.id !== product.id);
        let newTotal = state.totalAmountOfCart - (products_to_remove.price * products_to_remove.quantity);

        return {
            ...state,
            addedProductsToCart: newProducts,
            totalAmountOfCart: newTotal,
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedProduct = state.products.find(product => product.id === action.id);
        addedProduct.quantity += 1;
        addedProduct.changedPriceOfProduct = addedProduct.price * addedProduct.quantity;
        let newTotal = state.totalAmountOfCart + addedProduct.price;
        if (state.addedProductsToCart === []) {
            state.totalAmountOfCart = 0;
        }
        return {
            ...state,
            totalAmountOfCart: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedProduct = state.products.find(product => product.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedProduct.quantity === 1) {
            let new_products = state.addedProductsToCart.filter(product => product.id !== action.id);

            return {
                ...state,
                addedProductsToCart: new_products,
                totalAmountOfCart: 0,
            }
        }
        else {
            addedProduct.quantity -= 1;
            addedProduct.changedPriceOfProduct = addedProduct.price * addedProduct.quantity;
            let newTotal = state.totalAmountOfCart - addedProduct.price
            return {
                ...state,
                totalAmountOfCart: newTotal
            }
        }
    }
    if (action.type === LOGIN) {
        return {
            ...state,
            isLoggedIn: true,
        }
    }
    if (action.type === LOGOUT) {
        return {
            ...state,
            isLoggedIn: false,
        }
    }
    if(action.type === FETCH_PRODUCT) {
        return {
            ...state,
            products: [],
        }
    }
    if (action.type === FETCHED_PRODUCT) {
        return {
            ...state,
            products: action.data,
        }
    }
    return state;
}

export default cartReducer;



