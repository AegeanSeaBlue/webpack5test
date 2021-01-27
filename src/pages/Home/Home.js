import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import styles from './index.less';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>
          <Link to='/'><span className={styles.font}>Webpack5</span></Link>
        </h2>
        <h3 className='home' style={{fontSize: 26}}>Home</h3>
        <h4>
          <Link to='/about?a=1' onClick={() => {
            //console.log('to about', this.props);
          }}>To About</Link>
        </h4>
        <h4>
          <Link to='/table' onClick={() => {
            //console.log('to about', this.props);
          }}>To Table</Link>
        </h4>
        <h4>
          <Link to='/line' onClick={() => {
            //console.log('to about', this.props);
          }}>To Line</Link>
        </h4>
      </>
    );
  }
}

export default Home;
