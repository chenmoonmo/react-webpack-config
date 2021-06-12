import { configureStore } from '@reduxjs/toolkit'
import tableReducer from '../pages/tableReducer'

export default configureStore({
    reducer: {
        table:tableReducer
    }
  })