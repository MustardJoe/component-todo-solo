import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import todos from '../todo-data.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import filterFunction from '../filter-function.js';

class App extends Component {

    render() {
        //Header component instantiation
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        //New Todo component instantiation
        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }
        });
        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        //Filter component instantiation
        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterFunction(todos, filter);
                todoList.update({ todos: filtered });
            }
        });
        main.appendChild(filter.render());

        //Todo List componenet instantiation
        const todoList = new TodoList({ todos });
        const todoListDOM = todoList.render();
        dom.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
    
}

export default App;