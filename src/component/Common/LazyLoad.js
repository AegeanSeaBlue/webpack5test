import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Loading} from './Loading';

const Content = ({Wrap, props}) => {
  let nav = [useLocation(), useParams(), createBrowserHistory()];
  console.log(nav);
  return Wrap ? <Wrap {...props}/> : <Loading/>;
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
