import { configureStore } from '@reduxjs/toolkit'

import stateReducer from './reducers/stateReducer'

export default configureStore({
  reducer: stateReducer
})