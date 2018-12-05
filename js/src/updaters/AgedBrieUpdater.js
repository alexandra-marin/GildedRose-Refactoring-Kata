export default class AgedBrieUpdater {
    constructor(item) {
        this.item = item;
    }
    appliesTo = () => this.item.name === 'Aged Brie';
    updateQuality = () => {
        this.item.quality++;
        this.item.sellIn--;
        if (this.item.sellIn < 0) {
            this.item.quality++;
        }
        if (this.item.quality > 50) {
            this.item.quality = 50;
        }
    };
}