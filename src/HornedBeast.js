import React from 'react';

class HornedBeast extends React.Component {
  render () {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl}alt="" title={this.props.title}></img>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;
