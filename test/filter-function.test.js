import filterFunction from '../src/filter-function.js';

const test = QUnit.test;

QUnit.module('Filter function todo');
const todoList = [
    {
        task: 'Smash the Patriarchy',
        completed: false,
    },
    {
        task: 'Buy people food',
        completed: true,
    },
    {
        task: 'Buy cat food',
        completed: false,
    },
];


test('text filter test - return string match text', assert => {
    //Arrange
    const filterParam = {
        text: 'peo'
    };

    const expected = [
        {
            task: 'Buy people food',
            completed: true,
        },
    ];

    //Act
    const filteredData = filterFunction(todoList, filterParam);
   
    //Assert
    assert.deepEqual(filteredData, expected);
});

test('empty filter returns all data', assert => {
    //Arrange
    const filterParam = {
        text: ''
    };

    const expected = [
        {
            task: 'Smash the Patriarchy',
            completed: false,
        },
        {
            task: 'Buy people food',
            completed: true,
        },
        {
            task: 'Buy cat food',
            completed: false,
        },
    ];

    //Act
    const filteredData = filterFunction(todoList, filterParam);
   
    //Assert
    assert.deepEqual(filteredData, expected);
});
