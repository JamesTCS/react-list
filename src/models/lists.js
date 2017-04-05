import {EventEmitter} from 'events';

class ListsStore extends EventEmitter {
    constructor() {
        super();
        // possible load from local or web service but for now hardcoded
        this.lists = {
            "List One": [
                {
                    name: "item one",
                    strike: true,
                    bold: false
                },
                {
                    name: "item two",
                    strike: false,
                    bold: true
                },
                {
                    name: "item three",
                    strike: false,
                    bold: false
                }
            ],
            "Grocery List": [
                {
                    name: "milk",
                    strike: false,
                    bold: true
                },
                {
                    name: "eggs",
                    strike: false,
                    bold: false
                },
                {
                    name: "butter",
                    strike: false,
                    bold: false
                }
            ],
            "To Do List": [
                {
                    name: "grocery shopping",
                    strike: true,
                    bold: false
                },
                {
                    name: "workout",
                    strike: true,
                    bold: false
                },
                {
                    name: "pay bills",
                    strike: false,
                    bold: false
                }
            ]
        }
    }
    
    addList(name) {
        if(this.lists.hasOwnProperty(name)) {
            alert("List name already exists");
            return;
        }
        this.lists[name] = [];
    }
    
    removeList(name) {
        delete this.lists[name];
    }
    
    getLists() {
        return;
    }
    
    getListItems(list) {
        return this.lists[list];
    }
    
    toggleListItem(list, item) {
        this.lists[list][item].strike = !this.lists[list][item].strike;
        this.emit("change");
    }
}

const listsStore = new ListsStore;

export default listsStore;