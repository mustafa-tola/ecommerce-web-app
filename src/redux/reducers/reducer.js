import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, LOGIN, LOGOUT, FETCH_PRODUCT, FETCHED_PRODUCT } from "../actions/action-types/cartActionsTypes"

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
    if (action.type === ADD_TO_CART) {
        let addedItem;
        for (let item in state.products) {
            if (state.products[item]._id === action.id) {
                addedItem = state.products[item];
            }
        }
        //check if the action id exists in the addedItems
        let existed_item;
        for (let item in state.addedProductsToCart) {
            if (state.addedProductsToCart[item]._id === action.id) {
                existed_item = state.addedProductsToCart[item];
            }
        }
        if (existed_item) {
            addedItem.quantity += 1 
            addedItem.changedPriceOfProduct = addedItem.quantity * addedItem.price;
            alert("Thank You for purchasing the product");
            return {
                ...state,
                totalAmountOfCart: state.totalAmountOfCart + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.totalAmountOfCart + addedItem.price;
            addedItem.changedPriceOfProduct = addedItem.quantity * addedItem.price;
            alert("Thank You for purchasing the product");
            return {
                ...state,
                addedProductsToCart: [...state.addedProductsToCart,addedItem],
                totalAmountOfCart: newTotal
            }

        }
    }
    if (action.type === REMOVE_FROM_CART) {
        let products_to_remove;
        for (let item in state.addedProductsToCart) {
            if (state.addedProductsToCart[item]._id === action.id) {
                products_to_remove = state.addedProductsToCart[item];
            }
        }
        let newProducts = state.addedProductsToCart.filter(product => action.id !== product._id);
        let newTotal = state.totalAmountOfCart - (products_to_remove.price * products_to_remove.quantity);

        return {
            ...state,
            addedProductsToCart: newProducts,
            totalAmountOfCart: newTotal,
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedProduct;
        for (let item in state.products) {
            if (state.products[item]._id === action.id) {
                addedProduct = state.products[item];
            }
        }
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
        let addedProduct;
        for (let item in state.products) {
            if (state.products[item]._id === action.id) {
                addedProduct = state.products[item];
            }
        }
        //if the qt == 0 then it should be removed
        if (addedProduct.quantity === 1) {
            let new_products = state.addedProductsToCart.filter(product => product._id !== action.id);

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
            addedProductsToCart : [],
            totalAmountOfCart: 0,
        }
    }
    if (action.type === FETCH_PRODUCT) {
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



