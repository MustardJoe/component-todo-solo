import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        //const input = dom.querySelector('input');

        const filter = {
            // text: '',
            complete: 'all',
        };
        
        
        form.addEventListener('input', () => {
            const formData = new FormData(form);

            filter.text = formData.get('filter');
            filter.complete = formData.get('radio-filter');
                       
            this.props.onFilter(filter);
            console.log(filter.complete);   //test line
            
        });
        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <section class="filter-section">
                <form class="form">
                    <span class="search-text">Search Todo List</span>
                    <input class="filter" name="filter">
                    <label>
                        <input type="radio" name="radio-filter" value="all">All
                    </label>
                    <label>
                        <input type="radio" name="radio-filter" value="true">Finished
                    </label>
                    <label>
                        <input type="radio" name="radio-filter" value="false">Still To Do
                    </label>
                </form>
            </section>
        `;
    }
}

export default Filter;