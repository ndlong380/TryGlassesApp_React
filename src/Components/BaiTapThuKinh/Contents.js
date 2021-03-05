import React, { Component } from "react";

export default class Contents extends Component {
  state = {
    glassesInfo: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
  };

  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderGlasses = () => {
    return (this.state.contentGlasses = this.arrGlasses.map(
      (glasses, index) => {
        return (
          <div className="col-2 my-2" key={index}>
            <button
              onClick={() => this.changeGlasses(glasses)}
              style={{ background: "none", outline: "none" }}
            >
              <img
                style={{ cursor: "pointer" }}
                width="100"
                height="40"
                src={glasses.url}
              />
            </button>
          </div>
        );
      }
    ));
  };

  changeGlasses = (glasses) => {
    this.setState({
      glassesInfo: glasses,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content my-4">
          <div className="col-6 m-auto" id="right">
            <img src="/glassesImage/model.jpg" height="450" />
          </div>
          <div className="col-6 m-auto" id="model">
            <img
              src="/glassesImage/model.jpg"
              height="450"
              style={{ position: "relative" }}
            />
            <div
              style={{
                position: "absolute",
                top: 117,
                left: 195,
              }}
            >
              <img
                src={this.state.glassesInfo.url}
                style={{
                  height: 64,
                  opacity: 0.7,
                  width: 179,
                }}
              />
            </div>
            <div
              className="pt-5 mt-5"
              style={{
                backgroundColor: "orange",
                position: "absolute",
                bottom: 0,
                left: 100,
                width: 370,
                opacity: 0.6
              }}
            >
              <h3 style={{color: 'blue',fontWeight: 700}}>{this.state.glassesInfo.name}</h3>
              <p style={{color: "white"}}>{this.state.glassesInfo.desc}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content">{this.renderGlasses()}</div>
      </div>
    );
  }
}
