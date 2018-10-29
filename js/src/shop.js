import AgedBrie from './AgedBrie';
import BackstagePass from './BackstagePass';
import Sulfuras from './Sulfuras';
import SimpleItem from './SimpleItem';

const qualityUpdater = item => [AgedBrie, BackstagePass, Sulfuras, SimpleItem]
    .map(QualityUpdater => new QualityUpdater(item)).find(qu => qu.appliesTo());

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        this.items.map(qualityUpdater).forEach(qu => qu.updateQuality());

        return this.items;
    }
}

