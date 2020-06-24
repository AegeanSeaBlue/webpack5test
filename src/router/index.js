import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Home from '../pages/Home/Home';
//import About from '@/pages/About/About';
import {LazyLoad} from '../component/Common/LazyLoad';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <LazyLoad key='home'
                    load={() => import(/* webpackChunkName: "pages_home_home" */'@/pages/Home/Home')}/>
        }/>
        <Route path='/about' element={
          <LazyLoad key='about' load={() => import(/* webpackChunkName: "pages_about_about" */'@/pages/About/About')}/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
