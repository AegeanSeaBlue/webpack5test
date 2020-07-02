import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LazyLoad} from '../component/Common/LazyLoad';


const RouteList = () => {

  return [
    <Route path='/' element={
      <LazyLoad key='home'
                load={() => import(/* webpackChunkName: "pages_home_home" */
                  `@/pages/Home/Home`)}/>
    }/>,
    <Route path='/about' element={
      <LazyLoad key='about'
                load={() => import(/* webpackChunkName: "pages_about_about" */
                  `@/pages/About/About`)}/>
    }/>
  ];
};

export default () => {
  console.log('app');

  return (
    <BrowserRouter>
      <Routes children={RouteList()}/>
    </BrowserRouter>
  );
  /*return (<BrowserRouter children={createRoutesFromArray([
    {
      path: '/',
      element: <LazyLoad key='home'
                         load={() => import(/!* webpackChunkName: "pages_home_home" *!/'@/pages/Home/Home')}/>
    }
  ])}/>);*/
}
