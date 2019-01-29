import React from "react";
import { connect } from "react-redux";
import Header from "./components/header.js";
import Counter from "./components/counter.js";
import Footer from "./components/footer.js";
import "./design/design.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
