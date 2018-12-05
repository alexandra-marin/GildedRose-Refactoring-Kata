import qualityUpdater from './updaters';

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality = () => {
        this.items.map(qualityUpdater).forEach(qu => qu.updateQuality());

        return this.items;
    }
}

