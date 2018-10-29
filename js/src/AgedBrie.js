export default class AgedBrie {
    constructor(item) {
        this.item = item;
    }
    appliesTo = () => this.item.name === 'Aged Brie';
    updateQuality = () => {
        if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
        }
        this.item.sellIn = this.item.sellIn - 1;
        if (this.item.sellIn < 0 && this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
        }
    };
}