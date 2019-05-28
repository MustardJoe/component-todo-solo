function filterFunction(todoList, filterParam) {
    
    const lowerCaseFilter = filterParam.text.toLowerCase();

    return todoList.filter(todo => {
        const lowerCaseTaskList = todo.task.toLowerCase();
        const tasktext = lowerCaseTaskList.includes(lowerCaseFilter);
        const hasTask = !lowerCaseFilter || tasktext;
        
        let radioFilter = true;

        if(filterParam.radioFilter === 'true') {
            radioFilter = todo.completed === true;
        } 
        else if(filterParam.radioFilter === 'false') {
            radioFilter = todo.completed === false;
        }
        
        console.log(radioFilter);
        return hasTask && radioFilter;
    });
}

export default filterFunction;