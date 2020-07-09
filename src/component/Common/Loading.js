import React from 'react';
import {Spin} from 'antd';

export const Loading = () => <Spin spinning={true} size='large'>
  <div style={{height: 100}}>
    &nbsp;
  </div>
</Spin>;
