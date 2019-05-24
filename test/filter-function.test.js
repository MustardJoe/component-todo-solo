
const test = QUnit.test;

QUnit.module('Filter function todo');

function filterFunction(todos, filter) {

};


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


test('text filter test', assert => {
    //Arrange
    const filter = {
        text: 'peo'
    };

    const expected = [
        {
            task: 'Buy people food',
            completed: true,
        },
    ];

    //Act
    const filteredData = filterFunction(todoList, filter);
   
    //Assert
    assert.deepEqual(filteredData, expected);
});
