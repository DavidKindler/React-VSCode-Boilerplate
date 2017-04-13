import React, { Component } from 'react';

interface MyProps {}
interface MyState {}
export default class Content extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("h1", null, "It Works!")));
    }
}
