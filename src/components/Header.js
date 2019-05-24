import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Jonny's giant list of crap to do!</h1>
            </header>
        `;
    }
}

export default Header;