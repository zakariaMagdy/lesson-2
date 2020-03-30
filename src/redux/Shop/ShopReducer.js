import { ShopTypes } from "./ShopTypes";

//SHOP REDUCER

const shopItems = {
  items: null,
  isFetching: false,
  errorMsg: null
};

export const ShopReducer = (state = shopItems, action) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };

    case ShopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        errorMsg: null
      };

    case ShopTypes.FETCH_COLLECTION_FAILUR:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};
