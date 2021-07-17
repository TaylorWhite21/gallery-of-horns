import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: data,
      selectedBeast: {},
    };
  }

  handleShowModal = (beastTitle) => {
    let beast = data.find(selectedBeast => selectedBeast.title === beastTitle);
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    console.log(this.state.selectedBeast);
    return (
      <div>
        <Header />
        <Main
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast
          handleShowModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
