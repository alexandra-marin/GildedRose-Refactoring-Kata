import Item from './Item';

export default class ConjuredItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
        this.conjured = true;
    }
}
