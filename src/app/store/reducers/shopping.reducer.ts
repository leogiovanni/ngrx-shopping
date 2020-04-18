import { ShoppingItem } from '../models/shopping-item.model';
import * as ShoppingAction from '../actions/shopping.actions';

export interface ShoppingState {
    list: ShoppingItem[],
    loading: boolean,
    error: Error
}

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
}

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction.ShoppingAction) {
    switch (action.type) {
        case ShoppingAction.ShoppingActionTypes.LOAD_SHOPPING:
            return {
                ...state,
                loading: true
            }
        case ShoppingAction.ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case ShoppingAction.ShoppingActionTypes.LOAD_SHOPPING_FAILURE: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case ShoppingAction.ShoppingActionTypes.ADD_ITEM:
            return {
                ...state,
                loading: true
            }
        case ShoppingAction.ShoppingActionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case ShoppingAction.ShoppingActionTypes.ADD_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case ShoppingAction.ShoppingActionTypes.DELETE_ITEM:
            return {
                ...state,
                loading: true
            };
        case ShoppingAction.ShoppingActionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            }
        case ShoppingAction.ShoppingActionTypes.DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}