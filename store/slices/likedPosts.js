import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const addPost = createAsyncThunk(
  'posts/addLikedPost',//this posts/addPosts works as a action type. you can see it on redux dev tools
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
  'posts/getLikedPosts',//this posts/addPosts works as a action type. you can see it on redux dev tools
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
        // no need to implement reducer action for ading post to redux store. we can handle it here
        state.data.push(action.payload);
        state.loading = false;
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
  },
});

export default postsSlice.reducer;
