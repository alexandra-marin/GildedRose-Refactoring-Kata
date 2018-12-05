export default class Item {
    constructor(name, sellIn, quality, conjured = false) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.conjured = conjured;
    }
}
