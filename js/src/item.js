export default class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality = () => {
        if (this.quality > 0) {
            this.quality = this.quality - 1;
        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0 && this.quality > 0) {
            this.quality = this.quality - 1;
        }
    }
}
