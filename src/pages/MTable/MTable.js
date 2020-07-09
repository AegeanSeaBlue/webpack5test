import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'antd';
import source from './sta.json';

source.resultList.splice(0, 100);


let dims = ['OrderLevel', 'Region'];
let cols = ['ModeofTransportation', 'ProductCategory'];
let val = 'OrderQuantity';
let tcolumns = [];
let tdata = [];

let dimArr = [];
let columnArr = [];
dims.forEach((item, dimIndex) => {
  tcolumns.push({
    title: item,
    dataIndex: item,
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
cols.forEach(() => {
  columnArr.push({});
});

source.resultList.forEach(row => {
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
        //key
      };
    }

    return index && name ? pre + '_' + name : name;
  }, '');
  let colKey = cols.reduce((pre, elem, index) => {
    let name = row[elem];
    let key = index && name ? pre + '_' + name : name;
    columnArr[index][key] = {
      title: name,
      parent: pre,
      //key,
      children: [],
      dataIndex: 'value',
      render: (text = {}) => text[key]
    };
    return key;
  }, val);

  let cat = dimArr[dims.length - 1][dimKey].children[0];
  if (cat.value) {
    cat.value[colKey] = row[val] || '';
  } else {
    cat.value = {
      [colKey]: row[val] || ''
    };
  }
});

console.log('columnArr', columnArr);

/*dimArr = dimArr.reverse();

dimArr.forEach((item, index) => {

  if (index >= dimArr.length - 1) return false;

  Object.values(item).forEach(elem => {
    if (dimArr[index + 1][elem.parent]) {
      dimArr[index + 1][elem.parent].count += elem.count;
      dimArr[index+1][elem.parent].children
    }
  });
});*/

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
      Object.assign(item.children[0], {
        [item.column]: {
          children: item.name,
          count: item.count
        }
      });
      data.push.apply(data, item.children);
    }
    return data;
  }
};

if (dims.length > 0) {
  tdata = popDim(dimArr.reverse());
  console.log('td', tdata);
}
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
    title: cols.join(' > ') + ' : ' + val, children: colCategory
  });
} else if (val) {
  tcolumns.push({
    title: val, dataIndex: 'value', render: (text) => text[val]
  });
}

console.log('tcolumns', tcolumns);

class CTable extends Component {
  render() {

    return (
      <Table
        pagination={false}
        columns={tcolumns}
        dataSource={tdata}
        scroll={{
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
      </div>
    );
  }
}

export default MTable;

