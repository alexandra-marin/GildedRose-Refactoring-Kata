import Shop from '../src/Shop';
import Item from '../src/Item';

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

