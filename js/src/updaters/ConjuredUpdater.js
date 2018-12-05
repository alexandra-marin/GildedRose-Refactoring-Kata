import QualityDecreaser from './QualityDecreaser';

export default class ConjuredUpdater extends QualityDecreaser {
    constructor(item) {
        super(item, 2);
    }

    appliesTo = () => this.item.conjured;
}