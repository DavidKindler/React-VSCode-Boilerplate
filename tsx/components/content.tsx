import React, { Component } from 'react';

interface MyProps {}
interface MyState {qcMenu :any}

export default class Content extends Component<MyProps, MyState> {

  constructor (props, state){
    super(props)
    this.state = {
      qcMenu: []
    };
  }

  render() {
          console.log ('content qcmenu sate?',this.state.qcMenu)
    return (
         <div className="row"><h1>TEST</h1></div>
    );
  }
}
