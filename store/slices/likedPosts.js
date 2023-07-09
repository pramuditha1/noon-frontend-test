import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const { toString } = require('lodash');

const initialState = {
  data: [],
  loading: false,
};

export const addPost = createAsyncThunk(
  'posts/addLikedPost',//this posts/addLikedPost works as a action type. you can see it on redux dev tools
  async (postData) => {
    const response = await fetch('http://localhost:4000/favouritePosts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const post = await response.json();
    //after dispatching api request, returns the post object as the action payload
    return post;
  }
);

export const getLikedPosts = createAsyncThunk(
  'posts/getLikedPosts',//this posts/getLikedPosts works as a action type. you can see it on redux dev tools
  async () => {
    const response = await fetch('http://localhost:4000/favouritePosts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = await response.json();
    //after dispatching api request, returns the post object as the action payload
    return posts;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',//this posts/addLikedPost works as a action type. you can see it on redux dev tools
  async (id) => {
    const response = await fetch(`http://localhost:4000/favouritePosts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    //after dispatching api request, returns the post object as the action payload
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
          state.data.push(action.payload); // Add the new post to favouritePosts
          state.loading = false;
          state.error = "";
        } else {
          // Handle the error where the post already exists
          state.loading = false;
          state.error = "Post already exists.";
          state.existingID= id;
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
