import { Shop, Item } from '../src/gilded_rose';

describe('Gilded Rose', () => {
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

    describe('Backstage passes', () => {
        it('Backstage passes with sellIn 0 have quality reduced to 0', () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });

        it('Backstage passes with sellIn 1 and quality 0 have quality 0', () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, -3)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });

        describe('Fairly common backstage passes', () => {
            it('with quality at most 48 increase by 1', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 48)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(49);
            });

            it('with quality 49 increase by 1', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 49)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 50 remains constant', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });
        });

        describe('Fairly rare backstage passes', () => {
            it('with quality at most 48 increase by 2', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 49 increase by 1', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 50 remain constant', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });
        });

        describe('Super rare backstage passes', () => {
            it('with quality at most 47 increase by 3', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 48 increase by 2', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 49 increase by 1', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });

            it('with quality 50 remain constant', () => {
                const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).toEqual(50);
            });
        });
    });
});
