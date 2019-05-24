
const test = QUnit.test;

QUnit.module('Filter function todo');

function filterFunction(todoList, filterParam) {
    const lowerCaseFilter = filterParam.text.toLowerCase();
    return todoList.filter(todo => {
        const tasktext = todo.task.includes(lowerCaseFilter);
        console.log(filterParam);

        return tasktext;
    });    //(todoList, filterParam));
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
