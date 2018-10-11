import { Shop, Item } from '../src/gilded_rose';

describe('Elixir of the Mongoose', () => {
    it('decreases in quality by 1', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 5, 9)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
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

    it('with sellIn 0 decreases in quality by 1', () => {
        const gildedRose = new Shop([new Item('Elixir of the Mongoose', 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});

