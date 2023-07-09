import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';

const rootReducer = combineReducers({
  favouritePosts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
