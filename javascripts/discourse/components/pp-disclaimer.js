import Component from "@glimmer/component";

const FEATURED_CLASS = "pp-disclaimer";

export default class PpDisclaimer extends Component {
    get mustShow() {
        return settings.show_in_category_ids.split('|').map(str => parseInt(str, 10)).includes(this.args.topic.category_id);
    }

}