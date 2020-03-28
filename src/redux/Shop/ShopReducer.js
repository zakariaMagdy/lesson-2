import { ShopTypes } from "./ShopTypes";

//SHOP REDUCER

const shopItems = {
  items: null,
  isloading: true,
  errorMessage: undefined
};

export const ShopReducer = (state = shopItems, action) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTION_SUCCESS:
      return { ...state, isloading: false, items: action.payload };

    case ShopTypes.FETCH_COLLECTION_FAILUR:
      return { ...state, isloading: false, errormessage: action.payload };
    default:
      return state;
  }
};
