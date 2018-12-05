import AgedBrieUpdater from './updaters/AgedBrieUpdater';
import BackstagePassUpdater from './updaters/BackstagePassUpdater';
import SulfurasUpdater from './updaters/SulfurasUpdater';
import DefaultUpdater from './updaters/SimpleItemUpdater';

const qualityUpdater = item => [AgedBrieUpdater, BackstagePassUpdater, SulfurasUpdater, DefaultUpdater]
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

