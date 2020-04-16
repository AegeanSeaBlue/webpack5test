import React from 'react';
import './Home.css';
import './index.less';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2 className='font'>Webpack5</h2>
        <h3 className='home' style={{fontSize: 26}}>Home</h3>
      </>
    );
  }
}

export default Home;
