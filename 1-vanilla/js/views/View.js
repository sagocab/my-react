import {emit, on} from "../helper.js";

const tag = "[View]";

export default class View {
    constructor(element){
        if(!element) throw "no element";

        this.element = element;
        this.originalDisplay = this.element.style.display||"";

        return this;
    }

    hide(){
        this.element.style.display = "none";
        return this;
    }

    show(){
        this.element.style.display = this.originalDisplay;
        return this;
    }

    on(evnetName, handler){
        on(this.element, evnetName, handler);
        return this;
    }

    emit(evnetName, data){
        emit(this.element, evnetName, data);
        return this;
    }
}