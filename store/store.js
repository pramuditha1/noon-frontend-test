import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
