import { MOCK_POST_DETAILS } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux"
import PostCard from "./PostCard"
import { useEffect } from "react";
import { getPosts } from "../../store/slices/posts";
import { getLikedPosts } from "../../store/slices/likedPosts";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
    //We need to load favouritePosts array during the landing page load. if not can not validate existing item scenario
    dispatch(getLikedPosts());
  }, [])
  const posts = useSelector((state) => state.posts.data)
  const isLoading = useSelector((state) => state.posts.loading)
  return (
    <>
      {
        isLoading ? (<h3>loading....</h3>) :
          posts.length === 0 ? (<h3>no data...</h3>) :
            (posts.map((postDetails) => (
              <PostCard postDetails={postDetails} isHome={true} />
            )))}
    </>
  );
};

export default Posts;
