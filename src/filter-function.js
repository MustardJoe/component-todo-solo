function filterFunction(todoList, filterParam) {
    
    const lowerCaseFilter = filterParam.text.toLowerCase();

    return todoList.filter(todo => {
        const tasktext = todo.task.includes(lowerCaseFilter);
        return tasktext;
    });
}

export default filterFunction;