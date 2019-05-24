import Component from './Component.js';
import filterFunction from '../filter-function.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();

        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text: input.value
            });

        });
        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <section class="filter-section">
                <input class="filter" name="filter">
                <span class="search-text">Search Todo List</span>
            </section>
        `;
    }
}

export default Filter;