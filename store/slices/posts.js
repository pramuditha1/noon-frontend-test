import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PROD_ENV } from "../../utils/constants";

const initialState = {
  data: [],
  loading: false,
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',//this posts/addPosts works as a action type. you can see it on redux dev tools
  async () => {
    const response = await axios.get(`${PROD_ENV}/favouritePosts/posts/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = response.data;
    //after dispatching api request, returns the post object as the action payload
    return posts;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
  },
});

export default postsSlice.reducer;
