import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    let hornsToRender = [];
    data.forEach(object => {
      let beast = <HornedBeast
        imageUrl={object.image_url}
        title={object.title}
        description={object.description}
      />
      hornsToRender.push(beast);
    });
    return (
      <main>
        {hornsToRender}
      </main>
    );
  }
}

export default Main;

