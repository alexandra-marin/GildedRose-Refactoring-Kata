import Shop from '../src/Shop';
import Item from '../src/Item';
import ConjuredItem from '../src/ConjuredItem';

describe('Elixir of the Mongoose', () => {
    it('decreases in quality by 1', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 5, 9)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });

    it('conjured decreases in quality by 2', () => {
        const gildedRose = new Shop([new ConjuredItem('Elixir of the Mongoose', 5, 9)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(7);
    });

    it('does not decrease in quality lower than 0', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it('with sellIn 0 has quality reduced by 2', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(28);
    });

    it('conjured with sellIn 0 has quality reduced by 4', () => {
        const gildedRose = new Shop([new ConjuredItem('Elixir of the Mongoose', 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(26);
    });

    it('with sellIn 0 decreases in quality by 1', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

});

