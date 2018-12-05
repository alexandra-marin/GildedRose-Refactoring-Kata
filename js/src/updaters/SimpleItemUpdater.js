import QualityDecreaser from './QualityDecreaser';

export default class SimplItemUpdater extends QualityDecreaser {
    constructor(item) {
        super(item, 1);
    }

    appliesTo = () => true;
}