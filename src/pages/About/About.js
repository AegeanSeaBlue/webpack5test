import React from 'react';
import './About.css';
import './index.less';
import {Tooltip, Popover} from 'antd';
import {Observable, Operator, Observer} from 'rxjs';
import {Link} from 'react-router-dom';
import {Store} from './Store';
import {inject, observer, Provider} from 'mobx-react';

const request = () => {
  let observable = new Observable(
    (observer) => {
      fetch('/v1').then(res => {
        console.log('res', res);
        observer.next(1);
      });
    }
  );
  //observable.subscribe();
  console.log('ob', observable);
  return observable.toPromise();
};
let dim = ['OrderLevel'];
let col = ['ModeofTransportation', 'ProductCategory'];
let val = ['OrderQuantity'];
let valObj = {};


const Count = inject('store')(observer(({store}) => <span>{store.count}</span>));

class About extends React.Component {
  componentDidMount() {
    console.log('did mount');
    request().then(res => {
      console.log('r', res);
    });

  }

  render() {
    return (
      <Provider store={new Store()}>
        <h2 className='font'>
          <Link to='/'>Webpack5</Link>
        </h2>
        <h3 className='home' style={{fontSize: 26}}>About
          <Count/>
        </h3>
      </Provider>
    );
  }
}

export default About;
