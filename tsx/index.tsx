import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MainNav from './components/main-nav';
import reducers from './reducers/index';
import Content from './components/content';


const createStoreWithMiddleware = applyMiddleware()(createStore);
interface MyProps {}
interface MyState {}

class Root extends Component<MyProps, MyState> {
  render(){
    return (
       <div className="container-fluid" id="master-container">
        <MainNav />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('div#root'));

/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/

// ReactDOM.render(<SearchBar/>, document.querySelector('.foo'));