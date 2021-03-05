import React, { Component } from "react";
import Contents from "./Contents";
import Header from "./Header";

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/glassesImage/background.jpg",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "750px",
        }}
      >
        <Header />
        <Contents/>
      </div>
    );
  }
}
