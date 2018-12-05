import AgedBrieUpdater from './AgedBrieUpdater';
import BackstagePassUpdater from './BackstagePassUpdater';
import SulfurasUpdater from './SulfurasUpdater';
import ConjuredUpdater from './ConjuredUpdater';
import DefaultUpdater from './SimpleItemUpdater';

const updater = item => [AgedBrieUpdater, BackstagePassUpdater, SulfurasUpdater, ConjuredUpdater, DefaultUpdater]
    .map(QualityUpdater => new QualityUpdater(item)).find(qu => qu.appliesTo());

export default updater;