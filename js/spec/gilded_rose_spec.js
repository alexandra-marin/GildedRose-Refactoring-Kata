describe("Gilded Rose", function() {

  it("Elixir of the Mongoose decreases in quality by 1", function() {
    const gildedRose = new Shop([ new Item('Elixir of the Mongoose', 5, 9) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it("Sulfuras, Hand of Ragnaros does not decrease in quality by 1", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("Elixir of the Mongoose does not decrease in quality lower than 0", function() {
    const gildedRose = new Shop([ new Item('Elixir of the Mongoose', 5, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Aged Brie with quality below 50 increases by 1", function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 5, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Aged Brie with quality 50 remains constant", function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Fairly rare backstage passes with quality at most 48 increase by 2", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Fairly rare backstage passes with quality 49 increase by 1", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Fairly rare backstage passes with quality 50 remain constant", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });
  
  it("Fairly common backstage passes with quality at most 48 increase by 1", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 48) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
  });

  it("Fairly common backstage passes with quality 49 increase by 1", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Fairly common backstage passes with quality 50 remains constant", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Super rare backstage passes with quality at most 47 increase by 3", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Super rare backstage passes with quality 48 increase by 2", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Super rare backstage passes with quality 49 increase by 1", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Super rare backstage passes with quality 50 remain constant", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras, Hand of Ragnaros does not decrease in sellIn", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(5);
  });

  it("Items different than 'Sulfuras, Hand of Ragnaros' decrease in sellIn days", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
  });

  it("Items different than Aged Brie and Backstage passes with sellIn 0 have quality reduced by 2", function() {
    const gildedRose = new Shop([ new Item('Elixir of the Mongoose', 0, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(28);
  });

  it("Backstage passes with sellIn 0 have quality reduced to 0", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Aged Brie with sellIn 0 has +2 quality", function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 0, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  });

  it("Sulfuras, Hand of Ragnaros does not decrease in quality", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("Sulfuras, Hand of Ragnaros does not decrease in quality", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', -1, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });
});
