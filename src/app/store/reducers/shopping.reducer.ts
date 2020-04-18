import { ShoppingItem } from '../models/shopping-item.model';
import * as ShoppingAction from '../actions/shopping.actions';

const initialState : Array<ShoppingItem> = [
    {
        id: 'efc95d2d-2163-47db-8c36-e02d4797540d',
        name: 'Diet Coke'
    }
]

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction.ShoppingAction) {
    switch(action.type){
        case ShoppingAction.ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingAction.ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
