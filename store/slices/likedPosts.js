import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { toString } = require('lodash');

const initialState = {
  data: [],
  loading: false,
};

export const addPost = createAsyncThunk(
  'posts/addLikedPost',//this posts/addLikedPost works as a action type. you can see it on redux dev tools
  async (postData) => {
    const response = await axios.post('http://localhost:4000/favouritePosts/', postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const post = response.data;
    //after dispatching api request, returns the post object as the action payload
    return post;
  }
);

export const getLikedPosts = createAsyncThunk(
  'posts/getLikedPosts',
  async () => {
    const response = await axios.get('http://localhost:4000/favouritePosts/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = response.data;
    return posts;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id) => {
    const response = await axios.delete(`http://localhost:4000/favouritePosts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    return data;
  }
);

const postsSlice = createSlice({
  name: 'favouritePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const { id } = action.payload;
        //do not add existing posts into favourites redux state object. if exists api returns post id with error
        const existingPostIndex = state.data.findIndex((post) => post._id === id);
        if (existingPostIndex === -1) {
          state.data.push(action.payload);
          state.loading = false;
          state.error = "";
        } else {
          state.loading = false;
          state.error = "Post already exists.";
          state.existingID = id;
        }
      })      
      .addCase(addPost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getLikedPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLikedPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getLikedPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const { id } = action.payload;
        //remove post from redux store favouritePosts object
        state.data = state.data.filter(post => toString(post._id) !== toString(id))
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.loading = false;
      })
  },
});

export default postsSlice.reducer;
