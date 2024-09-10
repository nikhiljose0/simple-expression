import { configureStore } from "@reduxjs/toolkit";  
import calculatorSlice from './counterSlice'

const reduxStore = configureStore({
  reducer: {
    expressionReducer: calculatorSlice,
  },
});

export default reduxStore;