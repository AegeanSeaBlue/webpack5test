import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'antd';
import source from './sta.json';
import styles from './index.less';

source.resultList.splice(0, 100);
//'Region','OrderLevel', 'ModeofTransportation','OrderQuantity', 'ProductCategory'

let dims = ['OrderLevel',];

let cols = ['Region', 'ModeofTransportation', 'ProductCategory'];
let val = [];
let tcolumns = [];
let tdata = [];

let dimArr = [];
let columnArr = [];

if (dims.length > 0) {
  dims.forEach((item) => {
    tcolumns.push({
      title: item,
      dataIndex: item,
      width: 100,
      render: (text = {}) => ({
        children: text.children || null,
        props: {
          rowSpan: text.count || 0,
          colSpan: 1,
        }
      })
    });
    dimArr.push({});
  });
} else if (val.length > 0) {
  dimArr = [{
    Value: {
      children: [{}]
    }
  }];
}

cols.forEach(() => {
  columnArr.push({});
});

source.resultList.forEach((row) => {
  let dimKey = dims.reduce((pre, elem, index) => {
    let name = row[elem];
    let key = index && name ? pre + '_' + name : name;

    if (!dimArr[index][key]) {
      let lastIndex = index === (dimArr.length - 1);
      dimArr[index][key] = {
        name,
        count: lastIndex ? 1 : 0,
        column: elem,
        parent: pre,
        children: lastIndex ? [
          {
            [elem]: {
              children: name,
              count: 1
            }
          }
        ] : []
      };
    }

    return index && name ? pre + '_' + name : name;
  }, 'Value');
  let colKey = cols.reduce((pre, elem, index) => {
    let name = row[elem];
    let key = index && name ? pre + '_' + name : name;

    if (!columnArr[index][key]) {
      let lastIndex = index === (columnArr.length - 1);
      columnArr[index][key] = val.length > 1 ? {
        title: name,
        parent: pre,
        width: 100,
        children: lastIndex ? val.map(v => ({
          title: v,
          dataIndex: 'value',
          render: (text = {}) => text[key + '_' + v]
        })) : [],
      } : {
        title: name,
        parent: pre,
        children: [],
        width: 100,
        dataIndex: 'value',
        render: (text = {}) => text[key]
      };
    }
    return key;
  }, 'Value');

  if (val.length > 0) {
    let cat = dimArr[dimArr.length - 1][dimKey].children[0];
    val.forEach(v => {
      if (cat.value) {
        cat.value[val.length > 1 ? colKey + '_' + v : colKey] = row[v] || '';
      } else {
        cat.value = {
          [val.length > 1 ? colKey + '_' + v : colKey]: row[v] || ''
        };
      }
    });

  }
});

console.log('columnArr', columnArr, dimArr);
let popDim = (list) => {
  if (!(list instanceof Array)) return {};
  if (list.length > 1) {
    let shift = list.shift();
    for (let key in shift) {
      let item = shift[key];
      list[0][item.parent].count += item.count;
      list[0][item.parent].children.push.apply(list[0][item.parent].children, item.children);
    }
    for (let key in list[0]) {
      let item = list[0][key];
      Object.assign(item.children[0], {
        [item.column]: {
          children: item.name,
          count: item.count
        }
      });
    }

    return popDim(list);
  } else {
    let data = [];
    for (let key in list[0]) {
      let item = list[0][key];
      Object.assign(item.children[0], item.column ? {
        [item.column]: {
          children: item.name,
          count: item.count
        }
      } : null);
      data.push.apply(data, item.children);
    }
    return data;
  }
};

tdata = popDim(dimArr.reverse());
console.log('td', tdata);
console.log('dimArr', dimArr);

let popCategory = (list) => {
  if (!(list instanceof Array)) return [];
  if (list.length > 1) {
    let shift = list.shift();
    for (let key in shift) {
      let item = shift[key];
      list[0]?.[item.parent]?.children.push(item);
    }
    return popCategory(list);
  } else {
    return Object.values(list[0] || {});
  }
};

if (cols.length > 0) {
  let colCategory = popCategory(columnArr.reverse());
  tcolumns.push({
    title: cols.join(' > '), children: colCategory
  });
} else if (val.length > 0) {
  if (val.length > 1) {
    val.forEach(v => {
      tcolumns.push({
        title: v, dataIndex: 'value', render: (text) => text['Value_' + v]
      });
    });
  } else {
    tcolumns.push({
      title: val[0], dataIndex: 'value', render: (text) => text['Value']
    });
  }
}


console.log('tcolumns', tcolumns);

class CTable extends Component {
  render() {

    return (
      <Table
        className={styles.mtable}
        pagination={false}
        columns={tcolumns}
        dataSource={tdata}
        scroll={{
          x: 'max-content',
          y: 400,
          scrollToFirstRowOnChange: true
        }}
        bordered
        size="small"
        rowKey={() => 'row'}
      />
    );
  }
}

class MTable extends Component {
  componentDidMount() {
    document.addEventListener('visibilitychange', () => {
      console.log(document.visibilityState);
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            <Link to='/'>
              webpack
            </Link>
          </h2>
          <h3>
            MTable
          </h3>
        </div>
        <CTable/>
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
      </div>
    );
  }
}

export default MTable;

