class AgedBrie {
    constructor(item) {
        this.item = item;
    }

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

    updateQuality = () => {
        if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
            if (this.item.name === 'Backstage passes to a TAFKAL80ETC concert') {
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

    updateQuality = () => { }
}

class SimpleItem {
    constructor(item) {
        this.item = item;
    }

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


const qualityUpdater = (item) => {
    switch (item.name) {
    case 'Aged Brie': return new AgedBrie(item);
    case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePass(item);
    case 'Sulfuras, Hand of Ragnaros': return new Sulfuras(item);
    default: return new SimpleItem(item);
    }
};

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        this.items.map(qualityUpdater).forEach(x => x.updateQuality());

        return this.items;
    }
}

