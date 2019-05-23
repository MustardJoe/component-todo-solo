import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import todos from '../todo-data.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const todoList = new TodoList({ todos });
        const todoListDOM = todoList.render();
        dom.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
                <main>
                    <!-- CatList goes here -->
                </main>
            </div>
        `;
    }
    
}

export default App;