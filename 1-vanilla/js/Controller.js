const tag="[Controller]";

export default class Controller {
    constructor(store, {searchFromView}){
        console.log(tag);
        this.store = store;

        this.searchFromView = searchFromView;
    }
}