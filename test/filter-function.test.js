import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;


QUnit.module('Filter function todo');

test('text filter test', assert => {
    //Arrange
    todoList = [
        {
            task: 'Smash the Patriarchy',
            completed: false,
        },
        {
            task: 'Buy people food',
            completed: true,
        },
    ];

    //Act
   
    //Assert
    assert.htmlEqual(html, expected);
});
