import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Content from './components/content';
const createStoreWithMiddleware = applyMiddleware()(createStore);
class Root extends Component {
    render() {
        return (React.createElement("div", { className: "container-fluid", id: "master-container" },
            React.createElement(Content, null)));
    }
}
ReactDOM.render(React.createElement(Root, null), document.querySelector('div#root'));
//# sourceMappingURL=index.js.map