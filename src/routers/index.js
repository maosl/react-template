/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-13 11:21:50
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-13 16:28:18
 */
import { lazy } from "react";
const Layout = lazy(()=>import('../Layout/index'));
const Home = lazy(()=>import('../pages/Home/index'));
const rootRouter = [
    {
      path: '/',
      name:'首页',
      element: <Layout />,
      children:[
        {
          index: true,
          name: '首页',
          key: '/',
          element: <Home />,
        }
      ]
    },
  ]

  export default rootRouter;