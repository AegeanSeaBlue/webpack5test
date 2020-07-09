import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from '@/router/index';
import {Loading} from './component/Common/Loading';

ReactDom.render(<AppRouter/>, document.getElementById('root'));


/*setTimeout(() => {
  ReactDom.render(<AppRouter/>, document.getElementById('root'));
}, 3000);*/

