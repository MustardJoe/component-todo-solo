import Component from '../src/components/Component.js';

const test = QUnit.test;


class TodoItem extends Component {

    render() {
        const listItem = this.renderDOM();
        //const todo = this.props.todo;

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todoTestItem;  //when i instantiate the class, todo n
        //needs to reference the name of the thing I pass into the object
        //during instantiation
        
        console.log('here i am', todo);

        
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





QUnit.module('Todo Item test');

test('template', assert => {
    //Arrange
    const todoTestItem = {
        task: 'Buy people food',
        completed: false,
    };

    const expected = /*html*/`
        <li>
        <input type="checkbox" name="test" value="">${todoTestItem.task}
        </li>  
    `;

    //Act
    const todoItem = new TodoItem({ todoTestItem });
    const html = todoItem.renderTemplate();

    //Assert
    assert.htmlEqual(html, expected);
});
