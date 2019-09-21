import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";

export default class Dialog extends Component {
  renderDialog() {
    if (this.props.open) {
      return (
        <div className="background">
          <div className="dialog">{this.props.children}</div>
        </div>
      );
    }
  }

  render() {
    return ReactDOM.createPortal(this.renderDialog(), document.body);
  }
}
