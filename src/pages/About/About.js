import React from 'react';
import './About.css';
import './index.less';
import {Tooltip, Popover} from 'antd';
import {Observable, Operator, Observer} from 'rxjs';
import {Link} from 'react-router-dom';

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
let data = [
  {
    'OrderLevel': '低级',
    'ModeofTransportation': '火车',
    'ProductCategory': '办公用品',
    'OrderQuantity': 20670
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '火车',
    'ProductCategory': '办公用品',
    'OrderQuantity': 21603
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '火车',
    'ProductCategory': '家具产品',
    'OrderQuantity': 4160
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '家具产品',
    'OrderQuantity': 4552
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '火车',
    'ProductCategory': '技术产品',
    'OrderQuantity': 8845
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '火车',
    'ProductCategory': '技术产品',
    'OrderQuantity': 7809
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '火车',
    'ProductCategory': '技术产品',
    'OrderQuantity': 15831
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '火车',
    'ProductCategory': '家具产品',
    'OrderQuantity': 3760
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '空运',
    'ProductCategory': '办公用品',
    'OrderQuantity': 3211
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '火车',
    'ProductCategory': '技术产品',
    'OrderQuantity': 8590
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '火车',
    'ProductCategory': '办公用品',
    'OrderQuantity': 39083
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '空运',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1683
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '火车',
    'ProductCategory': '办公用品',
    'OrderQuantity': 21544
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '家具产品',
    'OrderQuantity': 8399
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '火车',
    'ProductCategory': '家具产品',
    'OrderQuantity': 7502
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '办公用品',
    'OrderQuantity': 768
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '办公用品',
    'OrderQuantity': 538
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '家具产品',
    'OrderQuantity': 5193
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '空运',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1166
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1860
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '火车',
    'ProductCategory': '家具产品',
    'OrderQuantity': 4287
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '空运',
    'ProductCategory': '办公用品',
    'OrderQuantity': 3503
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '空运',
    'ProductCategory': '办公用品',
    'OrderQuantity': 6187
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '空运',
    'ProductCategory': '办公用品',
    'OrderQuantity': 2907
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1336
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '空运',
    'ProductCategory': '家具产品',
    'OrderQuantity': 489
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '空运',
    'ProductCategory': '家具产品',
    'OrderQuantity': 1639
  }, {
    'OrderLevel': '低级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '办公用品',
    'OrderQuantity': 391
  }, {
    'OrderLevel': '中级',
    'ModeofTransportation': '空运',
    'ProductCategory': '技术产品',
    'OrderQuantity': 2503
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '大卡',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1162
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '空运',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1283
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '大卡',
    'ProductCategory': '家具产品',
    'OrderQuantity': 3958
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '大卡',
    'ProductCategory': '技术产品',
    'OrderQuantity': 1048
  }, {
    'OrderLevel': '其它',
    'ModeofTransportation': '空运',
    'ProductCategory': '家具产品',
    'OrderQuantity': 456
  }, {
    'OrderLevel': '高级',
    'ModeofTransportation': '空运',
    'ProductCategory': '家具产品',
    'OrderQuantity': 710
  }, {'OrderLevel': '其它', 'ModeofTransportation': '大卡', 'ProductCategory': '办公用品', 'OrderQuantity': 293}];

let dim = ['OrderLevel'];
let col = ['ModeofTransportation', 'ProductCategory'];
let val = ['OrderQuantity'];
let valObj = {};

class About extends React.Component {
  componentDidMount() {
      console.log('did mount');
      request().then(res => {
        console.log('r', res);
      });

  }

  render() {
    return (
      <>
        <h2 className='font'>
          <Link to='/'>Webpack5</Link>
        </h2>
        <h3 className='home' style={{fontSize: 26}}>About</h3>
        <table style={{borderCollapse: 'border', width: 500}}>
          <tbody>
          {/* {
            data.map((row, index) => <tr key={index}>
              {
                [...dim, ...col, ...val].map((col, idx) => <td key={idx}>
                  {row[col]}
                </td>)
              }
            </tr>)
          }*/}
          <tr>

          </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default About;
