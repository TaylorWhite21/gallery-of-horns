import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main
          title={"Eri from MHA"}
          imageUrl={"https://i.quotev.com/img/q/u/20/8/25/tmw4ykbro3.jpg"}
          description={"Happy Eri with horn"}
        />
        <Main
          title={"Imp Mercy"}
          imageUrl={"https://pm1.narvii.com/6828/bb90e61a8b0de7d2133c9aa82e3007897c721c26v2_hq.jpg"}
          description={"Imp Mercy from Overwatch"}
        />
        <Footer />
      </>
    )
  }
}

export default App;
