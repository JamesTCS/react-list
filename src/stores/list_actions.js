import Dispatcher from '../dispatcher';

export function addItem(list, item, bold) {
    Dispatcher.dispatch({
        type: "ADD_LIST_ITEM",
        list,
        item,
        bold
    });
}

export function removeItem(list, index) {
    Dispatcher.dispatch({
        type: "DELETE_LIST_ITEM",
        list,
        index
    });
}