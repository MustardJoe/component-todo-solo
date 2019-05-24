function filterFunction(todoList, filterParam) {
    
    const lowerCaseFilter = filterParam.text.toLowerCase();

    return todoList.filter(todo => {
        const lowerCaseTaskList = todo.task.toLowerCase();
        const tasktext = lowerCaseTaskList.includes(lowerCaseFilter);
        return tasktext;
    });
}

export default filterFunction;