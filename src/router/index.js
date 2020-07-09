import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LazyLoad} from '../component/Common/LazyLoad';

const RouteList = () => {
  /*return [
    <Route path='/' element={
      <Suspense fallback={<Loading/>}>
        <Home/>
      </Suspense>
    }/>
  ];*/
  return [
    <Route path='/' element={
      <LazyLoad key='home'
                load={() => import(
                  /* webpackPrefetch: true */
                  /* webpackChunkName: "pages_home_home" */
                  `@/pages/Home/Home`)}/>
    }/>,
    <Route path='/about' element={
      <LazyLoad key='about'
                load={() => import(
                  /* webpackPrefetch: true */
                  /* webpackChunkName: "pages_about_about" */
                  `@/pages/About/About`)}/>

    }/>,
    <Route path='/table' element={
      <LazyLoad key='table'
                load={() => import(
                  /* webpackPrefetch: true */
                  /* webpackChunkName: "pages_table_table" */
                  `@/pages/MTable/MTable`)}/>

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
