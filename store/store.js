import { configureStore, combineReducers } from '@reduxjs/toolkit';
import LikedPostsReducer from './slices/likedPosts';
import postsReducer from './slices/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
  favouritePosts: LikedPostsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
