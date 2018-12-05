export default class BackstagePassUpdater {
    constructor(item) {
        this.item = item;
    }
    appliesTo = () => this.item.name === 'Backstage passes to a TAFKAL80ETC concert';

    updateQuality = () => {
        this.item.quality++;
        this.item.sellIn--;
        if (this.item.sellIn < 11) {
            this.item.quality++;
        }
        if (this.item.sellIn < 6) {
            this.item.quality++;
        }
        if (this.item.quality > 50) {
            this.item.quality = 50;
        }
        if (this.item.sellIn < 0) {
            this.item.quality = 0;
        }
    };
}
