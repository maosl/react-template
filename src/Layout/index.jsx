/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-13 14:58:01
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-13 16:27:32
 */
import { Outlet } from "react-router";

function Layout() {
    return (
      <div style={{display:'flex'}}>
        <div style={{width:'200px',height:'100vh',background:'blue'}}>
        </div>
        <Outlet />
      </div>
    );
}

export default Layout;