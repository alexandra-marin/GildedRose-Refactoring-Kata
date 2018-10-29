class AgedBrie {
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
    }
}

class BackstagePass {
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
    }
}


class Sulfuras {
    constructor(item) {
        this.item = item;
    }

    appliesTo = () => this.item.name === 'Sulfuras, Hand of Ragnaros';

    updateQuality = () => { }
}

class SimpleItem {
    constructor(item) {
        this.item = item;
    }

    appliesTo = () => true;

    updateQuality = () => {
        if (this.item.quality > 0) {
            this.item.quality = this.item.quality - 1;
        }
        this.item.sellIn = this.item.sellIn - 1;
        if (this.item.sellIn < 0 && this.item.quality > 0) {
            this.item.quality = this.item.quality - 1;
        }
    }
}


const qualityUpdater = item => [AgedBrie, BackstagePass, Sulfuras, SimpleItem]
    .map(QualityUpdater => new QualityUpdater(item)).find(qu => qu.appliesTo());

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        this.items.map(qualityUpdater).forEach(qu => qu.updateQuality());

        return this.items;
    }
}

