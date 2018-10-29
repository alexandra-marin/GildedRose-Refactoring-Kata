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


export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].name === 'Aged Brie') {
                new AgedBrie(this.items[i]).updateQuality();
                continue;
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                new BackstagePass(this.items[i]).updateQuality();
                continue;
            }

            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                new Sulfuras(this.items[i]).updateQuality();
                continue;
            }

            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
            }

            this.items[i].sellIn = this.items[i].sellIn - 1;
            if (this.items[i].sellIn < 0) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1;
                }
            }
        }

        return this.items;
    }
}

