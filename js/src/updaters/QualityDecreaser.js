export default class QualityDecreaser {
    constructor(item, qualityDecreaseBy) {
        this.item = item;
        this.qualityDecreaseBy = qualityDecreaseBy;
    }

    updateQuality = () => {
        this.item.quality-=this.qualityDecreaseBy;
        this.item.sellIn--;
        if (this.item.sellIn < 0) {
            this.item.quality-=this.qualityDecreaseBy;
        }
        if (this.item.quality < 0) {
            this.item.quality = 0;
        }
    };
}