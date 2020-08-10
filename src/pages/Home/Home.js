import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import styles from './index.less';
import {Table, DatePicker} from 'antd';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>
          <Link to='/'><span className={styles.font}>Webpack5</span></Link>
        </h2>
        <h3 className='home' style={{fontSize: 26}}>Home</h3>
        <div>
          <DatePicker.RangePicker/>
        </div>
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

        <Table
          pagination={true}
          columns={[
            {
              title: 'A',
              render: (text, record) => {
                return {
                  children: Date.now(),
                  props: {
                    rowSpan: 3,
                    colSpan: 1
                  }
                };
              }
            },
            {
              title: 'B',
              render: (text, record) => {
                return {
                  children: Date.now(),
                  props: {
                    rowSpan: 3,
                    colSpan: 1
                  }
                };
              }
            },
            {
              title: 'V',
              dataIndex: 'category',
              children: [
                {
                  title: 'V1',
                  dataIndex: 'B',
                  render: (text, record) => {
                    console.log('B', text, record);
                    return {
                      children: Date.now(),
                      props: {
                        rowSpan: 3,
                        colSpan: 1
                      }
                    };
                  }
                },
                {
                  title: 'V2',
                  render: (text, record) => {
                    return {
                      children: Date.now(),
                      props: {
                        rowSpan: 3,
                        colSpan: 1
                      }
                    };
                  }
                }
              ]
            }
          ]}
          dataSource={[
            {
              category: [{A: {}}, {B: 2}],
              value: []
            },
            {}
          ]}
          scroll={{
            y: 400,
            scrollToFirstRowOnChange: true
          }}
          bordered
          size="small"
          rowKey={() => 'row'}
        />
      </>
    );
  }
}

export default Home;
