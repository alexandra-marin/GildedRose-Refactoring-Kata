package com.gildedrose;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class GildedRose {
    Item[] items;
    private final Map<String, QualityUpdater> qualityUpdaters;
    private final QualityUpdater simpleItemQualityUpdater;

    public GildedRose(Item[] items) {
        this.items = items;
        qualityUpdaters = new HashMap<>();
        qualityUpdaters.put("Sulfuras, Hand of Ragnaros", (item) -> {});
        qualityUpdaters.put("Backstage passes to a TAFKAL80ETC concert", new BackstagePassQualityUpdater());
        qualityUpdaters.put("Aged Brie", new AgedBrieQualityUpdater());
        simpleItemQualityUpdater = new SimpleItemQualityUpdater();
    }

    public void updateQuality() {
        Arrays.stream(items).forEach(item ->
                qualityUpdaters.getOrDefault(item.name, simpleItemQualityUpdater).updateQuality(item));
    }

}