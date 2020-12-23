import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from '@/router/index';
import {ConfigProvider} from 'antd';
import ZHCN from 'antd/lib/locale/zh_CN';

ReactDom.render((
  <ConfigProvider locale={ZHCN}>
    <AppRouter/>
  </ConfigProvider>
), document.getElementById('root'));
