import { Shop, Item } from '../src/gilded_rose';

describe('Sulfuras, Hand of Ragnaros', () => {
    it('does not decrease in quality by 1', () => {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it('does not decrease in sellIn', () => {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(5);
    });

    it("Items different than 'Sulfuras, Hand of Ragnaros' decrease in sellIn days", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    });

    it('does not decrease in quality when sellIn 0', () => {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it('does not decrease in quality when sellIn < 0', () => {
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });
});

