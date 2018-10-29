export default class BackstagePass {
    constructor(item) {
        this.item = item;
    }
    appliesTo = () => this.item.name === 'Backstage passes to a TAFKAL80ETC concert';
    updateQuality = () => {
        if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
            if (this.item.sellIn < 11) {
                if (this.item.quality < 50) {
                    this.item.quality = this.item.quality + 1;
                }
            }
            if (this.item.sellIn < 6) {
                if (this.item.quality < 50) {
                    this.item.quality = this.item.quality + 1;
                }
            }
        }
        this.item.sellIn = this.item.sellIn - 1;
        if (this.item.sellIn < 0) {
            this.item.quality = this.item.quality - this.item.quality;
        }
    };
}
