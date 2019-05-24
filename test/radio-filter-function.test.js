

const test = QUnit.test;

QUnit.module('radio button filter test');
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


test('radio filter test', assert => {
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
    const filteredData = radioFiltFunc(todoList, filterParam);
   
    //Assert
    assert.deepEqual(filteredData, expected);
});
