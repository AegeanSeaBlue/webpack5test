import React from 'react';
import {Spin} from 'antd';
import {useLocation, useParams} from 'react-router-dom';

const Content = ({Wrap, props}) => {
  let nav = [useLocation(), useParams()];
  console.log(nav);
  return Wrap ? <Wrap {...props}/> : <Spin spinning={true} size='large'>
    <div style={{height: 100}}>
      &nbsp;
    </div>
  </Spin>;
};


export class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.component = null;
    this.state = {loading: true};

    this.getComponent();
  }

  async getComponent() {
    let val = await this.props.load();
    this.component = val.default;
    this.setState({loading: false});
  }

  render() {
    return <Content Wrap={this.component} props={this.props}/>;
  }

  componentWillUnmount() {
    this.component = null;
  }
}
