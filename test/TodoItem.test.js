import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;


QUnit.module('Todo Item test');

test('template', assert => {
    //Arrange
    const todo = {
        task: 'Buy people food',
        completed: false,
    };

    const expected = /*html*/`
        <li>
        <input type="checkbox" name="test" value="">${todo.task}
        </li>  
    `;

    //Act
    const todoTestItem = new TodoItem({ todo });
    const html = todoTestItem.renderTemplate();

    //Assert
    assert.htmlEqual(html, expected);
});
