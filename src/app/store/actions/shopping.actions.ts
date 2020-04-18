import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM            = '[ADD_ITEM] Add Item',
    ADD_ITEM_SUCCESS    = '[ADD_ITEM] Add Item Success',
    ADD_ITEM_FAILURE    = '[ADD_ITEM] Add Item Failure',
    DELETE_ITEM         = '[DELETE_ITEM] Delete Item',
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload: String) {} 
}

export type ShoppingAction = AddItemAction | DeleteItemAction;

