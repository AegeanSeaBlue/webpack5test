import React from 'react';
import {Spin} from 'antd';

export class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};

    this.getComponent();
  }

  async getComponent() {
    let val = await this.props.load();
    this.setState({loading: false});
  }

  render() {
    console.log('lazy', this.props);
    const Content = this.state.component;
    return Content ? <Content {...this.props}/> : null;
  }
}
