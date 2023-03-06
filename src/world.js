class World{
    #elements

    constructor( name ){

        this.name = name;
        this.id = TOTAL_WORLDS;

        this.#elements = [];
        this.elements_length = 0;

        this.allow_duplicates = true;

        TOTAL_WORLDS ++;

    }

    add_element( element ){
        if(!this.allow_duplicates && this.#elements.find(element))
            return false;

        this.#elements.push( element );
        return true;
    }

    remove_element ( element ){
        this.#elements.pop(element);
        return true;
    }
}