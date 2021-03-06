import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

const tag = "[main]";
document.addEventListener("DOMContentLoaded", main);

function main(){
    console.log(tag);
    const store = new Store(storage);

    const views = {
        //TODO
        searchFromView: new SearchFormView()
    };

    new Controller(store, views);
}