import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        className="text-center text-white py-4 display-5 mb-4"
        style={{ backgroundColor: "black", opacity: 0.6 }}
      >
        <h4>TRY GLASS APP ONLINE</h4>
      </div>
    );
  }
}
