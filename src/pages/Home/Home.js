import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import styles from './index.less';
import {Table} from 'antd';
/*
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];
*/

/*const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  });
}
console.log(data);*/
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
let tdata = [
  {
    OrderLevel: '高级'
  }
];

let dim = ['OrderLevel'];
let col = ['ModeofTransportation', 'ProductCategory'];
let val = ['OrderQuantity'];
let valObj = {};

let dimMap = {};
let colMap = {};
data.forEach(row => {
  dim.forEach(elem => {
    let name = row[elem];
    if (dimMap[name]) {
      dimMap[name].value;
    }
  });
});

let columns = [
  {
    title: 'OrderLevel',
    render: (text, record, index) => {
      if (index % 4) {
        return {
          children: null,
          props: {
            rowSpan: 0,
            colSpan: 0,
          }
        };
      } else {
        return {
          children: record['OrderLevel'],
          props: {
            rowSpan: 4,
            colSpan: 1,
            style: {background: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
          }
        };
      }
    }
  },
  {
    title: 'Category',
    render: (text, record, index) => {
      return {children: index, colSpan: 1, rowSpan: 1};
    }
  },
  {
    title: 'ModeofTransportation',
    children: [
      {
        title: '火车',
        children: [
          {
            title: '办公用品'
          },
          {
            title: '家具产品'
          },
          {
            title: '技术产品'
          }
        ]
      },
      {
        title: '大卡',
        children: [
          {
            title: '家具产品'
          },
          {
            title: '技术产品'
          }
        ]
      },
      {
        title: '空运',
        children: [
          {
            title: '技术产品'
          }
        ]
      },
      {
        title: '海运',
      }
    ]
  }
];


class CTable extends React.Component {
  render() {
    return (
      <Table
        pagination={false}

        columns={columns}
        dataSource={data}
        scroll={{
          y: 400,
          scrollToFirstRowOnChange: true
        }}
        bordered
        size="small"
        rowKey={(record, index) => index}
      />
    );
  }
}


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    import('@/env.json').then(res => {
      console.log(res);
    });
  }

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
        <CTable/>
      </>
    );
  }
}

export default Home;
