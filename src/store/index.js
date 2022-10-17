/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-12 16:43:25
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-14 15:20:45
 */
import { configureStore } from '@reduxjs/toolkit';
import appStore from './appStore';
export default configureStore({
  reducer: {
    appStore:appStore.reducer
  },
})