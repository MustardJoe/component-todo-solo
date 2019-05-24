function template(todoItem) {
    
    if(todoItem.completed) {
        const html = `
        <li>
        <input type="checkbox" checked="true" name="test" value="">${todoItem.task}
        </li>
    `;
        return html;
    }
    else {

        const html = `
        <li>
        <input type="checkbox" name="test" value="">${todoItem.task}
        </li>
    `;
        return html;
    }

}

export default template;