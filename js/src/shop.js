class AgedBrie {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }
            this.items[i].sellIn = this.items[i].sellIn - 1;
            if (this.items[i].sellIn < 0 && this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }
        }
    }
}

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        new AgedBrie(this.items.filter(item => item.name === 'Aged Brie')).updateQuality();
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].name === 'Aged Brie') {
                continue;
            }
            if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].sellIn < 11) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                    if (this.items[i].sellIn < 6) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
            }
            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].quality > 0) {
                        if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                            this.items[i].quality = this.items[i].quality - 1;
                        }
                    }
                } else {
                    this.items[i].quality = this.items[i].quality - this.items[i].quality;
                }
            }
        }

        return this.items;
    }
}
