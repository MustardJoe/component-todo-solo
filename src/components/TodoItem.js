import Component from './Component.js';

class TodoItem extends Component {

    render() {
        const listItem = this.renderDOM();
    

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;  //when i instantiate the class, todo n
        //needs to reference the name of the thing I pass into the object
        //during instantiation
        
        // console.log('here i am', todo);

        
        if(todo.completed) {
            const html = `
            <li>
            <input type="checkbox" checked="true" name="test" value="">${todo.task}
            </li>
        `;
            return html;
        }
        else {
    
            const html = `
            <li>
            <input type="checkbox" name="test" value="">${todo.task}
            </li>
        `;
            return html;
        }
        
    }

}

export default TodoItem;