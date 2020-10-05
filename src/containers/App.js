import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};
const initialState = {
  input: "",
  imageUrl: "",
  facebox: {},
  route: "signin",
  isSignedin: false,
  loggedUser: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    date_joined: new Date(),
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      facebox: {},
      route: "signin",
      isSignedin: false,
      loggedUser: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        date_joined: new Date(),
      },
    };
  }

  loadUser = (user) => {
    this.setState({
      loggedUser: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        date_joined: user.date_joined,
      },
    });
  };
  calculateFaceLoc = (face) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height,
    };
  };

  setFaceBox = (facebox) => {
    this.setState({ facebox: facebox });
    console.log(this.state.facebox);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = (event) => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://radiant-forest-01776.herokuapp.com/imageurl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const bounding_box =
            data["outputs"][0]["data"]["regions"][0]["region_info"][
              "bounding_box"
            ];
          this.setFaceBox(this.calculateFaceLoc(bounding_box));

          fetch("https://radiant-forest-01776.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.loggedUser.id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              this.setState(
                Object.assign(this.state.loggedUser, { entries: data })
              );
            });
        } else {
          console.log("Unable to read the picture.");
        }
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (page) => {
    if (page === "signin" || page === "register") {
      this.setState(initialState);
    } else {
      this.setState({ isSignedin: true });
    }
    this.setState({ route: page });
  };

  render() {
    const { imageUrl, facebox, route, isSignedin, loggedUser } = this.state;
    return (
      <div className="app">
        <Particles className="particles" params={particlesOptions} />
        <Nav isSignedIn={isSignedin} onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <>
            <Rank name={loggedUser.name} entries={loggedUser.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} facebox={facebox} />
          </>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
