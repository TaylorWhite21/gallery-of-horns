import React from 'react';
import data from "./data.json"
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    // // let hornsToRender = [
    //   imageUrl={data[0].image_url}
    //   title={data[0].title}
    //   description={data[0].description}
    // // ]
    return (
      <Main>
        <HornedBeast
          imageUrl="xyz.com"
          title="abc"
          description="Hello"
        />
      </Main>
    )
  }
}

export default Main;

