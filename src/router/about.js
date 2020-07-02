import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LazyLoad} from '../component/Common/LazyLoad';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about'
               element={
                 <LazyLoad key='about'
                           load={() => import(/* webpackChunkName: "pages_about_about" */'@/pages/About/About')}/>
               }/>
      </Routes>
    </BrowserRouter>
  );
}
