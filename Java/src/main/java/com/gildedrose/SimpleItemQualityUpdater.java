package com.gildedrose;

public class SimpleItemQualityUpdater implements QualityUpdater {
    boolean isConjured(Item item) {
        return item.name.startsWith("Conjured");
    }

    int getQualityDecrease(Item item) {
        return Math.min(isConjured(item) ? 2 : 1, item.quality);
    }

    @Override
    public void updateQuality(Item item) {
        if (item.quality > 0) {
            item.quality = item.quality - getQualityDecrease(item);
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
            if (item.quality > 0) {
                item.quality = item.quality - getQualityDecrease(item);
            }
        }
    }
}
