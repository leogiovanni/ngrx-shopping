import { ShoppingItem } from './shopping-item.model';

export interface AppState {
    readonly shopping: Array<ShoppingItem>;
    // readonly card: Array<Card>; // example how to add new models
}