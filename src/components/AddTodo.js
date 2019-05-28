import Component from './Component.js';

class AddTodo extends Component {
    render() {
        console.log('anybody there?');
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const newTodo = {
                task: formData.get('new-todo'),
                completed: false
            };
            console.log(newTodo);
            onAdd(newTodo);

            form.reset();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-todo">
                <label>New Item for List<input name="new-todo"></label>
                <button>Add to List</button>
            </form>

        `;
    }
}

export default AddTodo;