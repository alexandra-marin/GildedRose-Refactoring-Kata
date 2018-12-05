export default class SulfurasUpdater {
    constructor(item) {
        this.item = item;
    }
    appliesTo = () => this.item.name === 'Sulfuras, Hand of Ragnaros';
    updateQuality = () => { };
}
