import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title="Eri from MHA"
          imageUrl="https://i.quotev.com/img/q/u/20/8/25/tmw4ykbro3.jpg"
          description="Happy Eri with horn"
        />

        <HornedBeast
          title="Imp Mercy"
          imageUrl="https://pm1.narvii.com/6828/bb90e61a8b0de7d2133c9aa82e3007897c721c26v2_hq.jpg"
          description="Imp Mercy from Overwatch"
        />
      </>
    )
  }
}

export default Main;
