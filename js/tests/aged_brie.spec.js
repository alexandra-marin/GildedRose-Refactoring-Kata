import Shop from '../src/shop';
import Item from '../src/item';

describe('Aged Brie', () => {
    it('with quality below 50 increases by 1', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 5, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it('with quality 50 remains constant', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it('with sellIn 0 has +2 quality', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(32);
    });

    it('with sellIn 0 has 50 quality', () => {
        const gildedRose = new Shop([new Item('Aged Brie', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });
});
