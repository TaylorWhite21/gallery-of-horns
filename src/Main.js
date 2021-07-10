import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render () {
    return (
      <HornedBeast
        title={this.props.title}
        imageUrl={this.props.imageUrl}
        description={this.props.description}
      />

      
    )
  }
}

export default Main;
