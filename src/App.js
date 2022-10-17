/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-13 14:06:08
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-13 16:04:25
 */
//示例1
// import { lazy } from "react";
// import {
//     Routes,
//     Route,
//   } from "react-router-dom";
// const Layout = lazy(()=>import('./Layout/index'));
// const Home = lazy(()=>import('./pages/Home/index'));
// function App() { 
//     //return useRoutes(routes);
//     return (
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//           </Route>
//         </Routes>
//     )
// }
// export default App;

import { useRoutes } from 'react-router-dom';
import rootRouter from './routers'
const App = () => {
  const element = useRoutes(rootRouter)
  return <>{element}</>
}

export default App