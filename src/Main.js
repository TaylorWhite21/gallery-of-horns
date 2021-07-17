import React from 'react';
import HornedBeast from './HornedBeast.js';

import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  render() {
    let hornsToRender = [];
    this.props.data.forEach((object, index) => {
      let beast = 
      <HornedBeast
        key={index} 
        handleShowModal={this.props.handleShowModal}
        handleCloseModal={this.props.handleCloseModal}
        imageUrl={object.image_url}
        title={object.title}
        description={object.description}
      />
      hornsToRender.push(beast);
    });
    return (
      <main>
        <CardColumns className="'card-group'">
        {hornsToRender}
        </CardColumns>
      </main>
    );
  }
}

export default Main;

