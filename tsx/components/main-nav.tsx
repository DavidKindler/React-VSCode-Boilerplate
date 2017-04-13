import React, { Component } from 'react';
import axios from 'axios';
import DynamicNestedTree from './dynamic-nested-tree';

interface MyProps {}
interface MyState {qcMenu: any}

export default class MainNav extends Component<MyProps, MyState> {

  constructor (props){
    super(props)
    this.state = {
      qcMenu: []
    };
    console.log (props)
    this.qcMenu('menu-ember');  
  }

  qcMenu(menu) {
    let self = this;
    axios 
    .get("https://desolate-stream-50260.herokuapp.com/proxy?url=https://www.qualcomm.com/api/menus", {
    })
    .then(function(result) {   
      self.setState({
        qcMenu: result.data[0].items
      });
    })
  }

  render() {
    return (
         <DynamicNestedTree qcMenu={this.state.qcMenu} />
    );
  }
}
