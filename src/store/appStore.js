/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-13 09:47:23
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-13 09:49:40
 */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    flag: false,
  };
  const slice = createSlice({
    name: 'appStore',
    initialState,
    reducers: {
      updateFlag(state) {
        state.flag = !state.flag;
      },
    },
  });
  
//   export const { actions, reducer } = slice;
export default slice.reducer;
