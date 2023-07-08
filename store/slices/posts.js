import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const addPost = createAsyncThunk(
  'posts/addPost',//this posts/addPosts works as a action type. you can see it on redux dev tools
  async (postData) => {
    const response = await fetch('http://localhost:4000/posts/', {
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

export const likePost = createAsyncThunk(
  'posts/likePost',
  async ({ postId, likedUserId }) => {
    const response = await fetch(`http://localhost:4000/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likedUserId,
      }),
    });
    const updatedPost = await response.json();
    return { postId, updatedPost };
  }
);


const postsSlice = createSlice({
  name: 'posts',
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
      .addCase(likePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const { postId, updatedPost } = action.payload;
        console.log(postId, updatedPost);
        const postIndex = state.data.findIndex((post) => toString(post.id) === toString(postId));
        console.log("postIndex: ", postIndex);
        if (postIndex !== -1) {
          state.data[postIndex] = updatedPost;
        }
        state.loading = false;
      })
      .addCase(likePost.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
